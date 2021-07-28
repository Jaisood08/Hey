var Ls = false

// GIF SHOW 
document.onreadystatechange = function () {
    console.log("Load ho rha tha")
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('Jcontent').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('Jload').style.visibility = "hidden";
            document.getElementById('Jcontent').style.visibility = "visible";
        }, 1000);
    }
}
