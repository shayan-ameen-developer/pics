import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="max-w-xs w-full border-gray-300 border border-solid rounded-md m-3 p-3"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full border border-solid border-gray-900 px-2 rounded-md"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
