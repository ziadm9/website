function switchTab(tab){
    selected = document.getElementById(tab)
    selectedBar = document.getElementById(`${tab}Bar`)
    selectedDesc = document.getElementById(`${tab}Desc`)
    backImg = selectedDesc.children[1].children[0].src
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
            selectedDesc.style.backgroundImage = `url(${backImg})`
        }
        
    }
   
}

function myFunction(x) {
    currentTab = document.querySelector(".selectedTab").id
    currentDescI = `${currentTab}Desc`
    currentDesc = document.getElementById(currentDescI)
    children = currentDesc.children
    left = children[0]
    right = children[1]
    bgImg = right.children[0].src
    
    

    if (x.matches) {
      document.getElementById("hobby").innerHTML = "Hobbies"
      document.getElementById("work").innerHTML = "Experience"
      currentDesc.style.backgroundImage = `url(${bgImg})`
    } else {
        document.getElementById("hobby").innerHTML = "Hobbies & Interests"
        document.getElementById("work").innerHTML = "Work Experience"
        currentDesc.style.backgroundImage = ""
        
    }
  }
  
  x = window.matchMedia("(max-width: 768px)")
  myFunction(x) 
  x.addListener(myFunction)

  
