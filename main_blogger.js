var count = 0;

function postFunction() {
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2");
    var text1 = document.getElementById("text1");
    var text = text1.value;

    if (count == 0) {
        post1.innerHTML = text;
        text = null;
        count++;
    }
    else if (count == 1) {
        reply1.innerHTML = text;
        text = null;
        count++;
    }
    else if (count == 2) {
        reply2.innerHTML = text;
        text = null;

    }
}
function clearFunction() {
    post1.innerHTML = "";
    reply1.innerHTML = "";
    reply2.innerHTML = "";
    count = 0;
}



