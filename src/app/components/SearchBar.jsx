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
