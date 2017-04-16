(function () {
    document.getElementsByClassName('nav-close')[0].addEventListener('click', function () {
        console.log(1)
        removeClass(document.body, 'nav-opened')
    })
    document.getElementsByClassName('menu-button')[0].addEventListener('click', function () {
        addClass(document.body, 'nav-opened')
    })
    document.getElementsByClassName('nav-cover')[0].addEventListener('click', function () {
        removeClass(document.body, 'nav-opened')
    })
})()

function addClass (el, className) {
    var oldClass = el.className
    if (oldClass.indexOf(className) >= 0) {
        console.log(1)
        return
    }
    el.className = oldClass + ' '+ className
}
function removeClass (el, className) {
    var oldClass = el.className
    el.className = oldClass.replace(' ' + className, '')
}