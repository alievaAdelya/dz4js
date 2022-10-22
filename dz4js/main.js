const menu = document.querySelector('.menu')
console.log(menu);

fetch("https://api.sampleapis.com/coffee/hot")
.then((response) => response.json())
.then((response) => {
     response.forEach((item) => {
        menu.innerHTML += `       
        <div class="card">
        <img class="images" src="${item.image}">
        <h3 class="title">${item.title}</h3>
        <p class="description">${item.description}</p>
        <p class="ingredients">${item.ingredients}</p>
 
        </div>
        `
     });
    })


    //2 задание
const vary = document.querySelector('.vary')
fetch(`https://fakestoreapi.com/products?limit=${2}`)
.then((res) => res.json())
.then((res) => {
    res.forEach((card) => {
        vary.innerHTML += `
        <div class="car">
        <p class="description">${card.description}</p>
        <p class="title">${card.title}</p>
        <p class="price">${card.price}</p>
        <img src="${card.image}">
        </div>
        `
    })
})