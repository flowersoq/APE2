function init() {
    let month = '';
    for (var i = 1; i <= 12; i++) {
        month += `<option>${i}月</option>`
    }
    document.querySelector("select[name='month']").innerHTML = month;
}
window.addEventListener('load', init);