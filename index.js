function myFunction(x) {
    if (x.matches) {
      document.querySelectorAll("#moreAbout")[0].style.display = "inline"
      document.querySelectorAll("#moreAbout")[1].style.display = "none"
    } else {
        document.querySelectorAll("#moreAbout")[1].style.display = "none"
        document.querySelectorAll("#moreAbout")[0].style.display = "flex"
    }
  }
  
  x = window.matchMedia("(max-width: 768px)")
  myFunction(x) 
  x.addListener(myFunction)
  
