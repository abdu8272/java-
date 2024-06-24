function array() {
    let str = prompt("Son ili so'z kiriting:"); 
    
    if (str.length <= 2) {
        console.log(str); 
    } else {
        let newArr = str.slice(1, -1); 
        console.log(newArr);
    }
}

array();