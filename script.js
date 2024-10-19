let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('navbar');
let sections = document.querySelectorall('section');
let navLinks = document.querySelectorAll('header nava');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]')
                .classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx');
    navbar.classList.toggle("active");
}

// const menuIcon = document.getElementById("menu-icon");
// const menuList = document.getElementById("menu-list");


// menuIcon.addEventListener("click", () => {
//     menuList.classList.toggle("navbar")
    
// });