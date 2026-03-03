const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".content");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
            content[j].classList.remove("active");
        }

        this.classList.add("active");

        const idtab = this.dataset.tab;
        const idcontent = document.querySelector(`[data-content = "${idtab}"]`);

        idcontent.classList.add("active");

        overlay.classList.add("show");
    })
}
close.addEventListener("click", function () {
    overlay.classList.remove("show");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        content[i].classList.remove("active");
    }
});
overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
        overlay.classList.remove("show");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
            content[i].classList.remove("active");
        }
    }
})
