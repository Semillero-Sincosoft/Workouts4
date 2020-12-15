function displayShare() {
    if(!document.getElementById('btnShare').classList.contains('active')) {
        document.getElementById('btnShare').classList.add('active')
        document.getElementById('svg').src = "assets/svg/icon-share-active.svg"
        document.getElementById('overlay').classList.remove('d-none')
    } else {
        document.getElementById('btnShare').classList.remove('active')
        document.getElementById('svg').src = "assets/svg/icon-share.svg"
        document.getElementById('overlay').classList.add('d-none')
    }
}