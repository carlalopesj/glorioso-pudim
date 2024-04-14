// Adicione funcionalidade ao botão de menu móvel
const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');
const mobileNavList = document.getElementById('mobile_nav_list');
const closeBtn = document.getElementById('close_btn');

const mobileNavLinks = document.querySelectorAll('#mobile_nav_list .nav-li');

mobileBtn.addEventListener('click', function() {
    mobileMenu.style.display = 'flex';
    mobileBtn.style.display = 'none';
    mobileNavList.style.display = 'flex';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
    mobileBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});

//Quando um link for clicado
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        mobileBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
});
//Teste
$(document).ready(function() {
    const sections = $('section');
    const navItems = $('.nav-li');

    $(window).on('scroll', function () {
        const header = $('.nav-bar');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        //console.log(scrollPosition);

        let activeSectionIndex = 0;

        //Adicionando box-shadow na nav ao rolar para baixo
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        //Barra em baixo do link na barra de navegação
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 104;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    //Biblioteca para a rolagem da página
    ScrollReveal().reveal('.home-cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.about-container', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.menu-container', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#pedido', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
    
});