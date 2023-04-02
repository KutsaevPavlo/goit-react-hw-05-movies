export const SearchForm = ({ updateQueryString, searchFilm }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.title.value.trim();
    updateQueryString(searchQuery);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="title" value={searchFilm} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
