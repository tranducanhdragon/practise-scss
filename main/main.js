$(document).ready(function () {

    //slide event
    [...document.querySelectorAll('.slider')].forEach((container, n = !1, i = void 0, r = void 0, a = !1, t = 0) => {
        container.addEventListener("mousedown", function (e) {
            n = !0,
                this.classList.add("active")
            i = e.pageX - this.offsetLeft,
                r = this.scrollLeft
        })
        container.addEventListener("mouseleave", function (e) {
            n = !1,
                this.classList.remove("active")
        })
        container.addEventListener("mouseup", function (e) {
            a && (e.preventDefault(), a = !1),
                n = !1,
                this.classList.remove("active")
        })
        container.addEventListener("mousemove", function (e) {
            var t;
            n && (
                e.preventDefault(),
                t = e.pageX - this.offsetLeft,
                t = r - 3 * (t - i),
                5 < Math.abs(this.scrollLeft - t) && (a = !0),
                this.scrollLeft = t
            )
        })
    })
});
