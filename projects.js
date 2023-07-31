function next(direction, current){
    let nexus
    document.getElementById(`project${current}`).style="display:none"
    if (direction=='right'){
        nexus=current+1
        if(nexus==9){
            nexus=1
        }
    }
    else if (direction=='left'){
        nexus=current-1
        if(nexus==0){
            nexus=8
        }
    }
    document.getElementById(`project${nexus}`).style=""

}