export const SearchForm = ({ updateQueryString }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.title.value.trim();
    updateQueryString(searchQuery);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
