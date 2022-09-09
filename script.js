// question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
cat.complain();

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.className = "subheading";

// question 5

const p = document.querySelectorAll("p");

for (let i = 0; i < p.length; i++) {
  p[i].className = "paragraph";
  p[i].style.color = "red";
}

// question 6

resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function listOfCats(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

listOfCats(cats);

// question 8

function createCats(catList) {
  html = "";

  for (let i = 0; i < catList.length; i++) {
    let ageOfCat = "Unknown age";

    if (catList[i].age) {
      ageOfCat = catList[i].age;
    }

    html += `<div>
             <h5>${catList[i].name}</h5>
             <p>Age: ${ageOfCat}</p>
             <div> `;
  }
  return html;
}
const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;
