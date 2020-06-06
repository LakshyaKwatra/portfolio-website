var coll = document.getElementsByClassName("collapsible");
var i;
console.log(coll);

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    console.log(i);
    var content = this.nextElementSibling;
    
    console.log(content);
    if (content.style.maxHeight){
      console.log('null');
      content.style.maxHeight = null;
    } else {
      console.log('full');
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.innerText);
      console.log(content.style.maxHeight);
    } 
  });
}
