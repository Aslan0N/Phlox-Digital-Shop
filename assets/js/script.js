const btnSearch = document.querySelector(".opnsrc");
const searchBox = document.querySelector(".absolute");
const closeSearch = document.querySelector(".close")

btnSearch.addEventListener('click', ()=>{
    searchBox.classList.add("ind99")
})

closeSearch.addEventListener('click', ()=>{
    searchBox.classList.remove("ind99")
})

const shop = document.querySelector(".opnshop");
const shopCard = document.querySelector(".shop-card")

shop.addEventListener('mouseover',()=>{
    shopCard.classList.add("shop-card-add")
})
shop.addEventListener('mouseout',()=>{
    shopCard.classList.remove("shop-card-add")
})