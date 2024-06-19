const $picture = document.querySelector("#product-picture");
const $title = document.querySelector(".product-content");
const $productTag = document.querySelector(".product-tag");
const $productDescription = document.querySelector("#description")


const url = window.location.search;
const id = new URLSearchParams(url).get("product-id");
console.log(id)


const renderData = (product) => {
    $picture.src = product.image;
    $title.innerHTML = product.title
    $productDescription.innerHTML = product.description
}

const loadData = () => {
    fetch(`https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderData(data.data)
        })
}
loadData()