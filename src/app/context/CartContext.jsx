import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [], // { id, title, price, cover, qty }
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.item, qty: 1 }] };
    }
    case 'REMOVE_ONE': {
      const next = state.items
        .map((i) => (i.id === action.id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
      return { ...state, items: next };
    }
    case 'REMOVE_ALL': {
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    }
    case 'CLEAR': {
      return initialState;
    }
    case 'HYDRATE': {
      return action.payload ?? initialState;
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart');
      if (raw) {
        const parsed = JSON.parse(raw);
        dispatch({ type: 'HYDRATE', payload: parsed });
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch {}
  }, [state]);

  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.qty, 0),
    [state.items]
  );
  const totalPrice = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [state.items]
  );

  const value = {
    items: state.items,
    totalItems,
    totalPrice,
    add: (item) => dispatch({ type: 'ADD', item }),
    removeOne: (id) => dispatch({ type: 'REMOVE_ONE', id }),
    removeAll: (id) => dispatch({ type: 'REMOVE_ALL', id }),
    clear: () => dispatch({ type: 'CLEAR' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used within CartProvider');
  return ctx;
}
