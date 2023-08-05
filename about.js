function switchTab(tab){
    selected = document.getElementById(tab)
    selectedBar = document.getElementById(`${tab}Bar`)
    selectedDesc = document.getElementById(`${tab}Desc`)
    let tabs=["hobby", "education", "work"]
    for(i=0;i<tabs.length;i++){
        thing = document.getElementById(tabs[i])
        thingBar = document.getElementById(`${tabs[i]}Bar`)
        thingDesc = document.getElementById(`${tabs[i]}Desc`)
        if (thing.classList.contains("selectedTab") && thing != selected){
            thing.classList.remove("selectedTab")
            thing.classList.add("tab")
            thingBar.classList.remove("selectedBar")
            thingBar.classList.add("underbar")
            thingDesc.style.display="none"
        }
        else if (thing == selected){
            selected.classList.remove("tab")
            selected.classList.add("selectedTab")
            selectedBar.classList.remove("underbar")
            selectedBar.classList.add("selectedBar")
            selectedDesc.style.display="flex"
        }
        
    }
   
}

function myFunction(x) {
    hobbyTab = document.getElementById("hobbyDesc")
    educationTab = document.getElementById("educationDesc")
    workTab = document.getElementById("workDesc")

    hobbyImg = hobbyTab.children[1].children[0].src
    educationImg = educationTab.children[1].children[0].src
    workImg = workTab.children[1].children[0].src
    
    

    if (x.matches) {
      document.getElementById("hobby").innerHTML = "Hobbies"
      document.getElementById("work").innerHTML = "Experience"
      hobbyTab.style.backgroundImage = `url(${hobbyImg})`
      educationTab.style.backgroundImage = `url(${educationImg})`
      workTab.style.backgroundImage = `url(${workImg})`
    } else {
        document.getElementById("hobby").innerHTML = "Hobbies & Interests"
        document.getElementById("work").innerHTML = "Work Experience"
        hobbyTab.style.backgroundImage = ""
        educationTab.style.backgroundImage = ""
        workTab.style.backgroundImage = ""
        
    }
  }
  
  x = window.matchMedia("(max-width: 768px)")
  myFunction(x) 
  x.addListener(myFunction)

  
