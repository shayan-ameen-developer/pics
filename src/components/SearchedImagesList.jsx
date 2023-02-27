import { SearchedImage } from "../components";

function SearchedImagesList({ images }) {
  const renderedImagesList = (
    <ul className="gap-y-3 columns-3xs">
      {images.map((image) => (
        <li className="mb-3" key={image.id}>
          <SearchedImage image={image} />
        </li>
      ))}
    </ul>
  );

  return images.length > 0 ? (
    renderedImagesList
  ) : (
    <h2 className="text-center">No Images</h2>
  );
}

export default SearchedImagesList;
