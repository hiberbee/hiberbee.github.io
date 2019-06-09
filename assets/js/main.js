function wayForPay(element) {
    const wayforpay = new Wayforpay();
    wayforpay.invoice(element.getAttribute("href"));
    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    function toggleContent(e) {
        e.stopPropagation();
        const button = this;

        const content = document.getElementById("menu");
        content.classList.remove("collapse");
        e.preventDefault();

        if (content.getAttribute("aria-hidden") === "true") {
            content.setAttribute("aria-hidden", "false");
            button.setAttribute("aria-expanded", "true");
        } else {
            content.setAttribute("aria-hidden", "true");
            button.setAttribute("aria-expanded", "false");
        }
    }

    document.querySelector("body").addEventListener("click", function () {
        const content = document.getElementById("menu");
        if (document.getElementById("menu").getAttribute("aria-hidden") === "false") {
            content.setAttribute("aria-hidden", "true");
            document.getElementById("burger").setAttribute("aria-expanded", "false");
        }
    });

    document.getElementById("burger").addEventListener("click", toggleContent);

    document.querySelector(".facebookEventLink").addEventListener("click", function () {
        FB.AppEvents.logEvent(
            this.getAttribute("data-anchor"),
            null,
            {}
        );
    });
});
