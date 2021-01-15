function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 2000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    document.querySelector('video').play();

    var $tab1 = document.getElementById('tab1');
    var $tab2 = document.getElementById('tab2');
    var $track = document.querySelector('.tabs-track')

    // About content actions
    $tab1.addEventListener('click', function(e) {
        //btns
        $tab2.classList.remove('active')
        this.classList.add('active')

        //track
        $track.classList.remove('tab2')
        $track.classList.add('tab1')
    })

    $tab2.addEventListener('click', function(e) {
        console.log(this.classList)
        //btns
        $tab1.classList.remove('active')
        this.classList.add('active')

        //track
        $track.classList.remove('tab1')
        $track.classList.add('tab2')
    })

    // Pin markee top
    var $markee = document.getElementById('goodbye');
    var markeePosition = $markee.offsetTop;
    window.addEventListener('scroll', function(e) {
        var scrollTop = document.scrollingElement.scrollTop;

        if(scrollTop > markeePosition) {
            $markee.classList.add('fixed')
        } else {
            $markee.classList.remove('fixed')
        }
    })

})