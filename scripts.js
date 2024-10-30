function sideMenuAction() {
    console.log('clicked');

    var sidebarsmall = document.getElementById('small-sidebar');
    var sidebar = document.getElementById('side-bar');
    var mainsec = document.getElementsByClassName("main-section")[0];
    const videosection = document.getElementsByClassName("videos-section")[0];

    sidebar.classList.toggle("hide-sidebar");
    sidebarsmall.classList.toggle("d-none");

    if (sidebar.classList.contains("hide-sidebar")) {
        mainsec.style.marginLeft = '90px';
        videosection.style.maxWidth = 'calc(100vw - 90px)';
    } else {
        mainsec.style.marginLeft = '256px';
        videosection.style.maxWidth = 'calc(100vw - 256px)';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', sideMenuAction);
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const menuBtnSm = document.getElementById('menu-sm-btn');
    const sideBarMobile = document.getElementById("side-bar-mobile");

    console.log('Small menu button:', menuBtnSm);

    function sidebarActionSmall() {
        console.log('Small menu button clicked');
        if (sideBarMobile) {
            sideBarMobile.classList.toggle('d-none');
        }
    }

    if (menuBtnSm) {
        menuBtnSm.addEventListener('click', sidebarActionSmall);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const ytoptions = document.getElementById('yt-ops-div').innerHTML;
    const cards = document.querySelectorAll('.video-grid');

    cards.forEach(card => {
        const opscontainer = document.createElement('div');
        opscontainer.className = ('dropdown');

        const opstoggle = document.createElement('i');
        opstoggle.className = ('bi bi-three-dots-vertical');
        opstoggle.setAttribute('data-bs-toggle', 'dropdown');

        opscontainer.appendChild(opstoggle);
        opscontainer.innerHTML += ytoptions;

        card.querySelector('.card-body').appendChild(opscontainer);
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

