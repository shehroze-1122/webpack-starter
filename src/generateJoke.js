import axios from "axios";
export default () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    const joke = document.getElementById("joke");
    joke.innerHTML = res.data.joke;
  });
};
