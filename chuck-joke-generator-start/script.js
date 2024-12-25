const button = document.getElementById("joke-btn");
const joke = document.getElementById("joke");

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        joke.innerHTML = JSON.parse(this.responseText).value;
      } else {
        joke.innerHTML = "Something went wrong";
      }
    }
  };
  xhr.send();
};

// Event Listeners
button.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
