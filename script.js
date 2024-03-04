let menutoggle = document.querySelector('.toggle');
let navlinks = document.querySelector('ul');
let links = document.querySelector('ul li');

menutoggle.onclick = function () {
    menutoggle.classList.toggle('active');
    navlinks.classList.toggle('open');
}

