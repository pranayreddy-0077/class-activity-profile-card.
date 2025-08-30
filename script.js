const updateBtn = document.getElementById("updateBtn");
const hobbyBtn = document.getElementById("hobbyBtn");
const viewsBtn = document.getElementById("viewsBtn");

const nameEl = document.getElementById("name");
const titleEl = document.getElementById("title");
const bioEl = document.getElementById("bio");
const hobbyEl = document.getElementById("hobby");
const viewsEl = document.getElementById("views");

const hobbies = ["Reading", "Gaming", "Hiking", "Cooking", "Traveling"];
let views = 0;

updateBtn.addEventListener("click", () => {
  nameEl.textContent = "Pranay Reddy";
  titleEl.textContent = "Student | Developer";
  bioEl.textContent = "Passionate about coding, learning, and building projects!";
});

hobbyBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * hobbies.length);
  hobbyEl.textContent = "Hobby: " + hobbies[random];
});

viewsBtn.addEventListener("click", () => {
  views++;
  viewsEl.textContent = views;
});
