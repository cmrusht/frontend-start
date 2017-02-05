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
      document.getElementById("face_page").innerHTML = "";
      document.getElementById("snippet_desc").innerHTML = "";
    
      let jsonData = JSON.parse(this.responseText);

      document.getElementById("snippet_title").innerHTML = "<h2>"+jsonData.Title+"</h2>";

      let i = 0;
      readTXT(jsonData.SnippetArray, i);

    }
    }
    // Retrieves the page in the background
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
};

function readTXT(file, i) {
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

    document.getElementById("snippet_desc").innerHTML += "<p>"+file[i].Description+"</p>";
    document.getElementById("snippet_desc").innerHTML += "<pre><code class="+file[i].Language+">"+this.responseText+"</code></pre>";


    $(document).ready(function() {
      $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
      });
    });

    i++;
    if(i < (file.length)) {
      readTXT(file, i);
    }
  }
}
  // Retrieves the page in the background
  xmlhttp.open("GET", file[i].codesnippetfile, true);
  xmlhttp.send();
};


let htmlclick1 = document.getElementById("htmlclick1");

let jsclick1 = document.getElementById("jsclick1");
let jsclick2 = document.getElementById("jsclick2");

function loadjsonfile(file) {
  readJSON("snippets/" + file);

  event.preventDefault(); // disables default form submission
  return false; // prevents further "bubbling" up of event
}

htmlclick1.addEventListener("click", function(){ loadjsonfile(htmlclick1.title); });

jsclick1.addEventListener("click", function(){ loadjsonfile(jsclick1.title); });
jsclick2.addEventListener("click", function(){ loadjsonfile(jsclick2.title); });