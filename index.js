// Our code here

fetch(`https://thronesapi.com/api/v2/Characters`)
.then(res => res.json())
.then(data => console.log(data))