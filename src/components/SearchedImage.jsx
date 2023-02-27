function SearchedImage({ image }) {
  return <img src={image.urls.regular} alt={image.alt_description} />;
}

export default SearchedImage;
