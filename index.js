(function() {
    let mouth = document.getElementById('open');
    mouth.classList.add('active');
    window.setInterval(function () {
        mouth.classList.toggle('active');
    }, 1500)
});