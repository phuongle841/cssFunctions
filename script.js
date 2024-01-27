let content = document.querySelector("main>p");
let body = document.querySelector("body");
let breakfast = 20,
  lunch = 25,
  dinner = 25,
  fruits = 15;
let day = breakfast + lunch + dinner + fruits;
let lastDate = new Date("2024-02-03");
function updateTime() {
  let date = new Date();
  let remain = (lastDate - date) / 1000 / (60 * 60 * 24);
  remain = Math.round(remain * day * 10) / 10;
  content.innerHTML = `${remain * 1000}`;
}
function updateRealTime() {
  let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  content.innerHTML = time;
}
let i = 0;
let cheese = [];
for (let i = 0; i < 15; i++) {
  cheese.push(i.toString(16));
}
function updateBackground() {
  let example = [];
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * cheese.length);
    const element = cheese[random];
    example.push(element);
  }
  let color = `#${example.join("")}`;
  body.style.backgroundColor = color;
}

setInterval(() => {
  updateBackground();
  updateRealTime();
}, 1000);
