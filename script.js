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
            window.close();
            if (!window.closed) {
                if (history.length > 1) {
                    history.back();
            } else {
                window.location.href = 'about:blank';
            }
        }
    })
}});

// ideanav

const ideas = [
    "start.html",
    "scope",
    "options",
    "intervention.html",
    "scale.html",
    "prestige",
    "strength",
    "time",
    "hope",
    "frontiers",
    "rent",
    "adventure",
    "next"
]

const current = location.pathname.slice(1)

if (ideas.includes(current)) {

    index = ideas.indexOf(current);

    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" && index < ideas.length - 1) {
            window.location.href = ideas[index + 1];
        } if (e.key === "ArrowLeft" && index > 0) {
            window.location.href = ideas[index - 1];
        }
    })
}