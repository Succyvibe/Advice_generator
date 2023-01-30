const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  const data = await response.json();

  return data;
};

getAdvice()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err.message));
