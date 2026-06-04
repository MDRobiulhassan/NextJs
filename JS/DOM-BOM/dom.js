// 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph changed";
  });

// 2
document
  .getElementById("highlishFirstCity")
  .addEventListener("click", function () {
    let cities = document.getElementById("citiesList");
    cities.firstElementChild.classList.add("highlight");
  });

// 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

// 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Juice";
  let itemList = document.getElementById("shoppingList");
  itemList.appendChild(newItem);
});

// 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasks = document.getElementById("taskList");
    tasks.lastElementChild.remove();
  });

// 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Hello World");
  });

// 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You Selected ${event.target.textContent}`);
  }
});

// 8
document
  .getElementById("feedBackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("feedbackInput");
    const display = document.getElementById("feedBackDisplay");

    display.textContent = `Feedback is ${input.value}`;
    input.value = "";
  });

// 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM Fully Loaded";
});

// 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    document.getElementById("descriptionText").classList.toggle("highlight")
  });
