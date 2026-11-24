function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <ion-icon name="search-outline"></ion-icon>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;