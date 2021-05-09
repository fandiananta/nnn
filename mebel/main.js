const hambur = document.getElementById('hamburger-menu');

hambur.onclick = function() {
    hambur.classList.toggle('active');
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('aktif');


}