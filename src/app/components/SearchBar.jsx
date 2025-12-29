export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}