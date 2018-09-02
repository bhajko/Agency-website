const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 600,
    interval: 3000
});

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {});

const modal = document.querySelector('.modal');
M.Modal.init(modal, {
    opacity: 0.5,
    inDuration: 500,
    outDuration: 500
});