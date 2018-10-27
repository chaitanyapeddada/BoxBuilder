//initalization
(function () {
    document.querySelector(".initalcount").textContent = 'No boxes';
    document.querySelector(".initalcount").style.fontSize = "10px";
})();
let count = 1;
let domElement = document.querySelector(".initalcount");
//if user click add button box added to the box
document.querySelector('.btn-primary').addEventListener('click', e => {
    count = domElement.innerText === 'No boxes' ? 1 :
        parseInt(domElement.innerText) + 1;
    domElement.textContent = count;
    //if count multiply 5 orange color box will display and alternative box color will change
    if (count % 5 === 0) {
        $('#box-build').append('<span class="badge" style="background-color:#b56a0e">' + count + '</span>');
    } else if (count % 2 === 0) {
        $('#box-build').append('<span class="badge" style="background-color:#333">' + count + '</span>');
    } else {
        $('#box-build').append('<span class="badge" style="background-color:#381ea0">' + count + '</span>');
    }
    domElement.style.fontSize = count * 10 + "px";

});
//if user click delete button box delete the box
document.querySelector('.btn-danger').addEventListener('click', e => {
    count = parseInt(domElement.innerText) - 1;
    $("span:last").remove();
    if (count > 0) {
        domElement.innerHTML = count;
        domElement.style.fontSize = count * 10 + "px";
    } else {
        domElement.innerHTML = "No boxes";
        domElement.style.fontSize = "10px";
    }
});
