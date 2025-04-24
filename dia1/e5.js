for(let i = 0; i < 5; i++){
    let text = ""
    for (let j = 0; j < 5; j++) {
        if (i ==0 || i == 4 || j == 0 || j== 4){
            text += "* "
        }else{
            text +="  "
        }
    }    
    console.log(text)
}