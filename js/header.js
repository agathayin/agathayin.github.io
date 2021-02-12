const headerContent = `
    <nav>
        <a href="./index.html" class="logo"><img src="./images/logo.svg" alt="logo" height="40"/></a>
        <img src="./images/menu.svg" alt="hambuger menu" width="40" class="mobile" rel="menuList" onclick="toggleMenu()"/>
        <ul class="desktop" rel="headerMenu">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./projects.html">Projects</a></li>
        </ul>
    </nav>
`
$(function(){
    loadComponents();
});

function loadComponents(){
    $('header').html(headerContent);
}

function toggleMenu(){
    $('[rel="headerMenu"]').toggle();
}