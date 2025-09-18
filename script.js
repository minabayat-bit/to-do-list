const inputEl = document.getElementById("todo-input");
const listEl = document.getElementById("todo-list");
const buttunEl = document.getElementById("button");

buttunEl.addEventListener("click", () => {
  const li = document.createElement("li");
  const text = document.createTextNode(inputEl.value);
  li.appendChild(text);
  listEl.appendChild(li);
  inputEl.value = "";
});
