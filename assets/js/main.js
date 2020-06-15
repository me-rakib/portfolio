$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })
    
    var typed = new Typed('#type',{
        strings: [
            '',
            'Web Designer'
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 100,
    });
    var typed = new Typed('#type-1',{
        strings: [
            '',
            'Web Designer'
        ],
        loop: true,
        typeSpeed: 80,
        backSpeed: 80,
    });

});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }
    else{
        $navbar.css({left: '0px'});
    }
}
alert("This website is now on Under Construction.")

