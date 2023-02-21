const output = document.getElementById("result");

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    output.textContent = JSON.stringify(data, undefined, 2);
    // output.textContent = data.results[0].name.first + " " + data.results[0].name.last;
    console.log(data);
  })
  .catch(error => {
    output.innerHTML = error;
    console.error(error);
  });