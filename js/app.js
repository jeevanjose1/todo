const form = document.querySelector("form");
const input = document.querySelector(".inp");
const mainres = document.querySelector(".mainres");

const container = document.querySelector(".todocontainer");

const add = function () {
  //   console.log(values);
  let values = input?.value.slice(0, 1).toUpperCase() + input.value.slice(1);
  const arrs = [];
  arrs.push(...input.value);

  //   const store = localStorage.setItem(values);
  console.log(arrs);

  ////////////////////
  const res = document.createElement("div");
  res.classList.add("result");

  /////////////////////////
  const output = document.createElement("div");
  output.classList.add("resultfield");
  output.innerHTML = values;
  res.appendChild(output);
  ///////////////
  const btn = document.createElement("button");
  btn.classList.add("delete");
  btn.innerHTML = `<i class="fas fa-backspace"></i>`;
  res.appendChild(btn);
  const btns = document.querySelectorAll(".delete");
  /////////////////
  if (input.value !== " " && input.value !== "") {
    mainres.appendChild(res);
  }
  input.value = null;
};

const deletefunction = function (e) {
  //   console.log(e.target);
  const tar = e.target;
  if (tar.classList[0] === "delete") {
    tar.parentNode.remove();
  }
};

////////////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});
/////////////////////

mainres.addEventListener("click", deletefunction);
