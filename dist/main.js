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

const modal = document.querySelectorAll('.modal');
M.Modal.init(modal, {});

const videos = document.querySelector('.vid');

function pause() {
    videos.pause();
}

function play() {
    if (videos.paused) {
        videos.play();
    }
}

function touchPlay() {
    videos.addEventListener('touchstart', play());
}

function touchPause() {
    videos.addEventListener('touchend', pause());
}

touchPlay();
touchPause();