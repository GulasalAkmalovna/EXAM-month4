const $postTitle = document.querySelector("#post-title");
const $inputImage = document.querySelector("#input-image");
const $inputTag = document.querySelector("#input-tag");
const $description = document.querySelector("#description")
const $addForm = document.querySelector("#add-form");


function NewProduct(title,image,tag,description) {
    this.title = title,
    this.image = image,
    this.tag = tag,
    this.description = description
}

const addNewProduct = (e) => {
    e.preventDefault();

    let newProduct = new NewProduct($postTitle.value,$inputImage.value, $inputTag.value,$description.value )
    console.log(newProduct)
    console.log(localStorage.getItem("token"))

    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Berear ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(data => data)

}

$addForm.addEventListener("submit" , addNewProduct)