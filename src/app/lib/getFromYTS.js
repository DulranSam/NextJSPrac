import Axios from "axios";
export async function GetRequest() {
  try {
    const data = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    ).catch((e) => {
      console.log(e.response.data);
    });
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function PostRequest(username, password, mail) {
  try {
    const r = await Axios.post("http://localhost:8000/register", {
      body: { username: username, password: password, mail: mail },
    }).then(() => {
      if (r.status !== 200) {
        console.log("Something went wrong");
      }
    });
  } catch (err) {
    console.error(err);
  }
}
