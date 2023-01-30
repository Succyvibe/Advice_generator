const adviceId = document.getElementById("advice-id");
const theAdvice = document.getElementById("the-advice");

const adviceBtn = document.getElementById("advice-btn");
adviceBtn.addEventListener("click", () => {
  getAdvice();
});

const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceId.innerHTML = `#${data.slip.id}`;
    theAdvice.innerHTML = `"${data.slip.advice}"`;
  } catch (err) {
    adviceId.innerHTML = "Error";
    theAdvice.innerHTML = "Failed to load advice. Please try again";
    console.log(err.message);
  }
};

getAdvice();
