function removecolor() {
    var selector=document.getElementById("colorSelect");
    value = selector.selectedIndex; 
    selector.removeChild(selector[value]);
}