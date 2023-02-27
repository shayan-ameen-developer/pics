import axios from "axios";

async function searchImages(query) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID gYRMlhGcb5yQp1xks6YPheGR-clVBeC6XgbUdc7k2w0",
    },
    params: {
      query,
      per_page: 25,
    },
  });

  return response.data.results;
}

export default searchImages;
