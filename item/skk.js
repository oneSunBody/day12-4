document.querySelector("header").addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
        document.querySelectorAll("header span").forEach((el) => {
            el.classList.remove("cur")
        })
        e.target.classList.add("cur")
    }
})