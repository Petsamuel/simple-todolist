var input = document.getElementById("input");
var add = document.getElementById("add");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var message = document.getElementById("message");
function liElement() {
  var li = document.createElement("li");
  var span1 = document.createElement("span");
  var span2 = document.createElement("span");
  li.className = "list-group-item";
  span1.className = "btn btn-success btn-sm inner ";
  span2.className = "btn btn-danger btn-sm inner ";
  span1.appendChild(document.createTextNode("done"));
  span2.appendChild(document.createTextNode("delete"));
  li.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);
  li.appendChild(span1);
  li.appendChild(span2);
  input.value = "";
  span1.addEventListener("click", function () {
    li.classList = "done";
    li.className = "btn btn-success btn-sm inner ";
    li.innerHTML = "completed";
  });
  span2.addEventListener("click", function () {
    span2.parentNode.remove();
  });
}
add.addEventListener("click", () => {
  if (input.value.length >= 5) {
    liElement();
    message.innerHTML = `Success <i class="fas fa-marker "></i>`;
    message.className = "text-center text-success bold";
  } else {
    message.innerHTML = "Too Short";
    message.className = "text-center text-warning";
  }
});

input.addEventListener("keypress", () => {
  if (input.value.length >= 5 && event.which === 13) {
    liElement();
  } else {
  }
});

function line() {
  console.log("clicked");
}
tick.addEventListener("click", line);
