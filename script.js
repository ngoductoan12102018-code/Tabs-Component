const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".content");
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }
        for (var k = 0; k < content.length; k++) {
            content[k].classList.remove("active");
        }

        this.classList.add("active");

        const idtab = this.dataset.tab;
        const idcontent = document.querySelector(`[data-content = "${idtab}"]`);

        idcontent.classList.add("active");
    })
}

