document.querySelectorAll(".price-box__more").forEach((item) =>{
    item.onclick = () =>{
        item.previousElementSibling.classList.add("active")
        item.classList.add("active")
    }
})