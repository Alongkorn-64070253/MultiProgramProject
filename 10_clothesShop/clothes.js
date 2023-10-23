count = 0
function change() {
    if (count == 0){
        location.href = '../05_paper/paper.html'
    }
    count++;
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}