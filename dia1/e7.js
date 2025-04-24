for(let i = 0; i < 5; i++){
    let text = ""
    for (let j = 0; j < 5; j++) {
        if (i <= j){
            text += "* "
        }else{
            text +="  "
        }
    }    
    console.log(text)
}