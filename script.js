let content = document.querySelector("main>p");
console.log(content);
let breakfast = 20,
  lunch = 25,
  dinner = 25,
  fruits = 15;
let day = breakfast + lunch + dinner + fruits;
console.log(day);
let date = new Date();
let lastDate = new Date("2024-02-03");
let remain = (lastDate - date) / 1000 / (60 * 60 * 24);
remain = Math.round(remain * day * 10) / 10;
console.log(date);
content.innerHTML = `${remain*1000}`;
