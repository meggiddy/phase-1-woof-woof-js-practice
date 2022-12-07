document.addEventListener("DOMContentLoaded", async () => {
  const dogs = await getDogs();
  createSpan(dogs);
  toggleGoodBad();
});
const createSpan = (dogs) => {
  const div = document.querySelector("#dog-bar");
  const doginfo = document.querySelector("#dog-info");
  const img = document.createElement("img");
  const btn = document.createElement("button");

  div.innerHTML = "";
  doginfo.innerHTML = "";
  doginfo.append(btn);
  doginfo.append(img);

  dogs.map((dog) => {
    const span = document.createElement("span");
    span.textContent = dog.name;
    span.addEventListener("click", () => {
      img.setAttribute("src", dog.image);
      btn.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!";
    });
    div.append(span);
  });
};
const getDogs = () => {
  return fetch("http://localhost:3000/pups").then((response) =>
    response.json()
  );
};

let toggleValue = false;

const toggleGoodBad = () => {
  const toggle = document.querySelector("#good-dog-filter");
  
  toggle.addEventListener("click", async () => {
    const dogs = await getDogs();
    toggleValue = !toggleValue
    if (toggleValue===true){
        
        return createSpan(dogs.filter((dog) => dog.isGoodDog));
    } else {
        return createSpan(dogs);
    }
    
  });
};
