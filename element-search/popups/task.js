let popupMain = document.getElementById('modal_main');
window.isShow = 0;

window.onpopstate = function (event) {
    popupMain.style.display = 'flex';
};
document.body.onmouseout = function (event) {
    if (event.clientY < 0) {
        popupMain.style.display = 'flex';
    }
};
popupMain.onclick = function (event) {
    if (event.target.id == "comeback") {
        popupMain.style.display = 'none';
    }
};



