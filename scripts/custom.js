$(document).ready(function() {
    // Setting up scrollspy with navigation bar
    $('body').scrollspy({ target: '#navbar' });

    // Typing animation on title
    let options = {
        strings: ["Hi, I'm <span class='name'>Samy</span>", "Salut, je m'appelle <span class='name'>Samy</span>"],
        typeSpeed: 60,
        loop: true,
        loopCount: Infinity,
        backDelay: 1500,
        showCursor: false,
    };
    let typed = new Typed('.title', options);

    // Toggle collapse link on experience boxes
    $('.multiCollapse').click(function() {
        $(this).toggleClass( "active" );
        if ($(this).hasClass("active")) {
            $(this).children().text('Read Less');
        } else {
            $(this).children().text('Read More');
        }
    });
});