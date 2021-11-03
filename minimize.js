function $(selector){
    return document.querySelector(selector);
}
function $A(selector) {
    return document.querySelectorAll(selector);
}
function $N(type){
    return document.createElement(type);
}
function $NS(type){
    return document.createElementNS("http://www.w3.org/2000/svg", type);
}