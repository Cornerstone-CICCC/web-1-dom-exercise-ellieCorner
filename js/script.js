// YOUR CODE HERE

const button1 = document.getElementById("btn1");
const output1 = document.getElementById("output1");
button1.addEventListener("click", () => {
  output1.style.color = "red";
});

const button2 = document.getElementById("btn2");
const output2 = document.getElementById("output2");
button2.addEventListener("click", () => {
  const span = document.createElement("span");
  span.textContent = " Hello World!";
  output2.appendChild(span);
});

const button3 = document.getElementById("btn3");
const output3 = document.getElementById("output3");
button3.addEventListener("click", () => {
  output3.querySelector("p").classList.remove("small-text");
});

const button4 = document.getElementById("btn4");
const output4 = document.getElementById("output4");
button4.addEventListener("click", () => {
  output4.querySelectorAll("p").forEach((child) => (child.style.color = "red"));
});

const button5 = document.getElementById("btn5");
const input = document.getElementById("message");
button5.addEventListener("click", () => {
  const text = input.value;
  console.log(text);
});
