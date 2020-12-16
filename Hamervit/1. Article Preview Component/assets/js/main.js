function displayShare() {
    document.getElementById('overlay').classList.toggle('d-none')
    document.getElementById('btnShare').classList.toggle('active')
    if(document.getElementById('btnShare').classList.contains('active')) {
        document.getElementById('svg').src = "assets/svg/icon-share-active.svg"
    } else {
        document.getElementById('svg').src = "assets/svg/icon-share.svg"
    }
}