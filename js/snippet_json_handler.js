function readJSON(file) {
    if (window.XMLHttpRequest)
    { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
    else
    { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        let jsonData = JSON.parse(this.responseText);
        readTXT(jsonData);
    }
    }
    // Retrieves the page in the background
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
};

function readTXT(file) {
    if (window.XMLHttpRequest)
    { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
    else
    { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("snippet_title").innerHTML = "<h2>"+file.Title+"</h2>";
        document.getElementById("snippet_desc").innerHTML = "<p>"+file.Description+"</p>";
        document.getElementById("snippet_code_ele").innerHTML = "<pre><code class="+file.Language+">"+this.responseText+"</code></pre>";
        $(document).ready(function() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
        });
    }
    }
    // Retrieves the page in the background
    xmlhttp.open("POST", file.codesnippetfile, true);
    xmlhttp.send();
};

let htmlclick1 = document.getElementById("htmlclick1");

let jsclick1 = document.getElementById("jsclick1");

function loadjsonfile(file) {
    readJSON("snippets/" + file);

    event.preventDefault(); // disables default form submission
    return false; // prevents further "bubbling" up of event
}

htmlclick1.addEventListener("click", function(){ loadjsonfile(htmlclick1.title); });
jsclick1.addEventListener("click", function(){ loadjsonfile(jsclick1.title); });