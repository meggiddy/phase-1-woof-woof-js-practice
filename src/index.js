document.addEventListener("DOMContentLoaded", () => {
  createSpan();
});
const createSpan = async () => {
  const div = document.querySelector("#dog-bar");
  const doginfo = document.querySelector("#dog-info");
  const img = document.createElement("img");
  const dogs = await getDogs();
  doginfo.append(img);
  dogs.map((dog) => {
    const span = document.createElement("span");
    span.textContent = dog.name;
    img.setAttribute("src", dog.image);

    span.addEventListener("click", () => {});
    div.append(span);
  });
};
const getDogs = () => {
  return fetch("http://localhost:3000/pups")
    .then((response) => response.json())
    .then((data) => data);
};
const dispDog = () => {
  getDogs;
};
