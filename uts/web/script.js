const footer = document.getElementById("footer");

footer.style.backgroundColor = "lightblue";

const tdElements = document.getElementsByTagName("td");

function changeToBrown(event) {
  event.target.style.backgroundColor = "#808080";
}

function changeToWhite(event) {
  event.target.style.backgroundColor = "white";
}

// Menambahkan event listener pada setiap elemen <td>
for (let i = 0; i < tdElements.length; i++) {
  tdElements[i].addEventListener("mouseenter", changeToBrown);
  tdElements[i].addEventListener("mouseleave", changeToWhite);
}

const liElements = document.querySelectorAll("li");

liElements.forEach((li) => {
  li.addEventListener("mouseenter", function (e) {
    e.target.style.color = "white";
  });
});