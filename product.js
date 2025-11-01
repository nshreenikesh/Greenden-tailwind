// calling function
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var menuicon=document.getElementById("menuicon")
menuicon.addEventListener("click",function () 
{
  sidenav.style.right=0  
})
closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})
// search functionalty

  var search = document.getElementById("search");
  var productcontainer = document.getElementById("product-container");
  var productlist = productcontainer.querySelectorAll("div");

  search.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
      var productname = productlist[count].querySelector("h1").textContent;
      if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
        productlist[count].style.display = "none";
      } else {
        productlist[count].style.display = "block";
      }
    }
  });
