// for live server convenience
if (window.location.pathname.slice(-5) === ".html") {
    localStorage.setItem("agreed", true);
}

// check for disclaimer agreement
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".overlay")

    if (localStorage.getItem("agreed")) {
        return
    } else {
        overlay.classList.add("show")
        const agree = document.querySelector(".agree")
        const disagree = document.querySelector(".disagree")
        agree.addEventListener("click", () => {
            localStorage.setItem("agreed", true)
            overlay.classList.remove("show")
        })
        disagree.addEventListener(("click"), () => {
            window.close()
        })
    }
});