document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.body.classList.add('white-screen');
    }, 5000);

    setTimeout(function () {
        window.location.href = 'http://127.0.0.1:5500/stage2/start2.html';
    }, 7000);
});
