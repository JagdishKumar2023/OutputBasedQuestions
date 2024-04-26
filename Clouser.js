<button id="myButton">Click me</button>;
function handleClick() {
  let count = 0;
  return function () {
    count++;
    console.log(`Button clicked ${count} times`);
  };
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick());
