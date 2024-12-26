let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function (event) {
  if (inp.value === "") {
    event.preventDefault();
  } else {
    let li = document.createElement("li");
    let delbtn = document.createElement("button");

    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    li.innerText = inp.value;
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value = "";

    console.log("New task added.");
  }
});

// let delbtns = document.querySelectorAll(".delete");

// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//     console.log("delete button clicked.");
//   });
// }

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
