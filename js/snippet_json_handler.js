// Ajax function
function readJSON(file) {
    if (window.XMLHttpRequest)
    { // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }
    else
    { // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    // When ajax has retrieved data
    xmlhttp.onreadystatechange=function()
    {
      // If data recieved
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {   
      // Reset page to blank
      document.getElementById("face_page").innerHTML = "";
      document.getElementById("snippet_desc").innerHTML = "";
      
      // Parse the returned json object data into a variable array
      let jsonData = JSON.parse(this.responseText);

      // Set the page title
      document.getElementById("snippet_title").innerHTML = "<h2>"+jsonData.Title+"</h2>";

      // Counter
      let i = 0;
      // Pass in json object array and count
      readTXT(jsonData.SnippetArray, i);

    }
    }
    // Retrieves the page in the background
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
};

// Ajax function 2
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

    // Set inner html
    document.getElementById("snippet_desc").innerHTML += "<p>"+file[i].Description+"</p>";
    document.getElementById("snippet_desc").innerHTML += "<pre class='code_snip'><code class="+file[i].Language+">"+this.responseText+"</code></pre>";

    // The <pre> class is used the highlight code syntax using the js library

    // Used to highlight code on a page once it has been correctly tagged
    $(document).ready(function() {
      $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
      });
    });

    // Increment counter
    i++;
    // If counter hasnt reached end of array, get more data.
    if(i < (file.length)) {
      readTXT(file, i);
    }
  }
}
  // Retrieves the page in the background
  xmlhttp.open("GET", file[i].codesnippetfile, true);
  xmlhttp.send();
};


// Setup buttons to variables
let htmlclick1 = document.getElementById("htmlclick1");

let jsclick1 = document.getElementById("jsclick1");
let jsclick2 = document.getElementById("jsclick2");

let cssclick1 = document.getElementById("cssclick1");

// passes in file to ajax function
function loadjsonfile(file) {
  readJSON("snippets/" + file);

  event.preventDefault(); // disables default form submission
  return false; // prevents further "bubbling" up of event
}

// Add event listeners to buttons
htmlclick1.addEventListener("click", function(){ loadjsonfile(htmlclick1.title); });

jsclick1.addEventListener("click", function(){ loadjsonfile(jsclick1.title); });

cssclick1.addEventListener("click", function(){ loadjsonfile(cssclick1.title); });
cssclick2.addEventListener("click", function(){ loadjsonfile(cssclick2.title); });