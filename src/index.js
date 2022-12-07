document.addEventListener("DOMContentLoaded", () => {});
const createSpan = async () => {
  const div = document.querySelector("#dog-bar");
  const span = document.createElement("span");

  const dogs = await getDogs();
  dogs.map((dog)=>{
    span.textContent = dog.name
    div.appendChild(span)

  })
};
const getDogs = () => {
  return fetch("http://localhost:3000/pups")
    .then((response) => response.json())
    .then((data) => data);
};
