// Event Listeners

document.querySelector("#input").addEventListener("submit", generate);

// UI selectors
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

// function
function generate(e) {
  // http request
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      console.log(lastName.value);

      addJoke(response);
    }
  };

  xhr.send();

  e.preventDefault();
}

// Function

function addJoke(response) {
  const jokeUI = document.createElement("p");
  jokeUI.className = "joke";
  let output = response.value.joke;
  output = output.replace("&quot;", '"');
  output = output.replace("&quot;", '"');
  output = output.replace("&quot;", '"');
  output = output.replace("&quot;", '"');
  output = output.replace("Chuck", `${firstName.value}`);
  output = output.replace("Chuck", `${firstName.value}`);
  output = output.replace("Chuck", `${firstName.value}`);
  output = output.replace("Chuck", `${firstName.value}`);
  output = output.replace("Norris", `${lastName.value}`);
  output = output.replace("Norris", `${lastName.value}`);
  output = output.replace("Norris", `${lastName.value}`);
  output = output.replace("Norris", `${lastName.value}`);
  jokeUI.textContent = output;
  const display = document.querySelector("#display");
  display.append(jokeUI);
}
