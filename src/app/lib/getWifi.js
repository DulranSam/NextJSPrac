import { Axios } from "axios";

export default async function getWiki(searchTerm) {
  const response = await Axios.get(
    "https://en.wikipedia.org/w/api.php?" + searchTerm
  );

  return response.json();
}
