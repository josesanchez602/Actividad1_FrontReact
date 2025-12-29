// export function SearchBar({ searchTerm, setSearchTerm }) {
//   return (
//     <div className="mb-6">
//       <input
//         type="text"
//         placeholder="Buscar por título"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   );
// }
//import './search-bar.css';
//import "../styles/cartButton.css";
import "../../styles/search-bar.css"
export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar__input"
      />
    </div>
  );
}
