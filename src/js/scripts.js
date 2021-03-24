const mobileMenuHandler = () => {
    const menuBtn = document.querySelector('.mobile-nav')
    const openMenu = document.querySelector('header nav')
    const header = document.querySelector('header');
    
    menuBtn.classList.toggle('open')
    openMenu.classList.toggle('open')
    header.classList.toggle('show-menu')

    if (menuBtn.classList.contains('open')) {
        document.body.classList.add('scroll-disabled')
    }

    else {
        document.body.classList.remove('scroll-disabled')
    }
}