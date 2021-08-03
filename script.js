function runCmd() {
    var ip = document.getElementById("ipBox").value;
    var userInput = document.getElementById("inputBox").value;
    document.getElementById("myoutput").innerHTML = "Loading...";
    var xhttp = new XMLHttpRequest();
    var url = "http://"+ip+"/cgi-bin/index.py?q="+userInput;
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onload = function() {
        document.getElementById("myoutput").innerHTML = xhttp.responseText;
    }
}