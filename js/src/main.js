if (document.querySelector(".header")) {
    const   headerBurger = document.querySelector(".header__burger"),
            headerNav = document.querySelector(".header__nav"),
            headerNavItems = document.querySelectorAll(".header__nav *");

    const mobileNavOpen = () => {
        document.body.classList.add("body--not-scroll");
        headerNav.classList.add("nav--active");
        headerBurger.classList.add("header__burger--active");
    }

    const mobileNavClose = () => {
        document.body.classList.remove("body--not-scroll");
        headerNav.classList.remove("nav--active");
        headerBurger.classList.remove("header__burger--active");
    }

    headerBurger.addEventListener("click", () => {
        if (!headerNav.classList.contains("nav--active")) {
            mobileNavOpen();
        } else {
            mobileNavClose();
        }
    });

    headerNavItems.forEach((headerNavItems_item) => {
        headerNavItems_item.addEventListener("click", () => {
            mobileNavClose();
        });
    });
}


let howto = 0;

function toggle_howto() {
    if (howto == 0) {
        document.getElementById("modal-howto").style.display = "block"
        howto = 1
    } else {
        document.getElementById("modal-howto").style.display = "none"
        howto = 0
    }
}