import { useState } from "react";
import { SearchBar, SearchedImagesList } from "./components";

import searchImage from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (query) => {
    const response = await searchImage(query);
    setImages(response);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <SearchedImagesList images={images} />
    </>
  );
}

export default App;
