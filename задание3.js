roadMines = [false, false, false, true, false, false, false, false, false, false]
mines=0
for (i=0; i<roadMines.length; i++){
    console.log('танк переместился на ', i+1)
    if (roadMines[i]===true){
        mines+=1
        if (mines==1){
            console.log('Танк поврежден')
        }
        if (mines==2){
            console.log('танк взорван')
            break
        }
    }
}
