const body = document.querySelector("body");
const quoteSec = document.querySelector("#swansonQuote");
const button = document.querySelector("button");
const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

const getQuote = async (quoteSec) => {
  const res = await axios.get(
    "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
  );
  return res.data;
};

async function updateQuote() {
  getQuote().then((res) => {
    return (quoteSec.innerHTML = res);
  });
}

button.addEventListener("click", updateQuote);
