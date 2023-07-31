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
            thingDesc.style="display:none"
        }
        else if (thing == selected){
            selected.classList.remove("tab")
            selected.classList.add("selectedTab")
            selectedBar.classList.remove("underbar")
            selectedBar.classList.add("selectedBar")
            selectedDesc.style=""
        }
        
    }
   
}