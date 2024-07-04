AOS.init();
const detaCopy=document.getElementById('deta-copy');
setInterval(function (event) {
    let year = new Date();
    detaCopy.textContent = year.getFullYear()
}, 1000)
