// alert("th pqge hqs ben rrenefere");
console.log("The page has been rendered")

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))