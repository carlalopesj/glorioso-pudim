// Adicione funcionalidade ao botão de menu móvel
const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');
const mobileNavList = document.getElementById('mobile_nav_list');
const closeBtn = document.getElementById('close_btn');

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
