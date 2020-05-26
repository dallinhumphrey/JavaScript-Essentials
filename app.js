var pHello = document.getElementById("hello");

pHello.innerText = "new world";

pHello.innerHTMLs += " order <span>hello world</span>";

pHello.outerHTML =
  '<h2 id="hello">new world order <span>hello world</span></h2>';
