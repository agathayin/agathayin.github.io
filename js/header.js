const headerContent = `
    <nav>
        <a href="`+document.location.origin+`/index.html" class="logo"><img src="`+document.location.origin+`/images/logo.svg" alt="logo" height="40"/></a>
        <div class="menu">
            <img src="./images/menu.svg" alt="hambuger menu" width="40" class="mobile" rel="menuList" onclick="toggleMenu()"/>
            <ul class="desktop" rel="headerMenu">
                <li><a href="`+document.location.origin+`/index.html">Home</a></li>
                <li><a href="`+document.location.origin+`/projects.html">Projects</a></li>
            </ul>
        </div>
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