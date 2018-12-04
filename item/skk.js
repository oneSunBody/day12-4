document.querySelector("header").addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
        document.querySelectorAll("header span").forEach((el) => {
            el.classList.remove("cur")
        })
        e.target.classList.add("cur")
    }
})

let scroll = new BScroll('section', {
    scrollY: true,
    click: true,
    eventPassthrough: "horizontal"

})