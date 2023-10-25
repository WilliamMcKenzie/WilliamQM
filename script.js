
function init(){
    var items = document.getElementsByClassName('parallax');
    new simpleParallax(items, {
        scale: 3.5,
        orientation: 'right'
    });
}

function goTo(id){
    var element_to_scroll_to = document.getElementById(id)
    element_to_scroll_to.scrollIntoView()
}

function openTab(url){
    window.open(`https://${url}`)
}