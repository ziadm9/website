function myFunction(x) {
    if (x.matches) {
      document.querySelectorAll("#moreAbout")[0].style.display = "inline"
      document.querySelectorAll("#moreAbout")[1].style.display = "none"
      console.log("kys")
    } else {
        document.querySelectorAll("#moreAbout")[1].style.display = "none"
        document.querySelectorAll("#moreAbout")[0].style.display = "flex"
        console.log("kys23")
    }
  }
  
  x = window.matchMedia("(max-width: 600px)")
  myFunction(x) 
  x.addListener(myFunction)
  