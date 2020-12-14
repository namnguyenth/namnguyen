var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    //   coll.style.color = "#e5a823";

    } else {
      content.style.display = "block";
    }
  });
}



var cols = document.getElementById("press");
var i;

for (i = 0; i < cols.length; i++) {
  cols[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    //   coll.style.color = "#e5a823";

    } else {
      content.style.display = "block";
    }
  });
}
