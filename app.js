function filterInput () {
    let value = phoneInput.value.split('')
    filterValue = []
   
    for(let i =0; i<value.length; i++){
    
    if(value[i] >='0'&& value[i]<='9' && pattern[i]=='#'){
        filterValue.push(value[i])
    }else if (value[i] == pattern[i] && pattern[i] != '#'){
       filterValue.push(value[i])
    } else {
       break
   }
console.log(filterValue )
 phoneInput.value = filterValue.join('')
}
}
//for(let i =0; i<value.length; i++){
    // cansoli.log(value[i], patterns[i])  
  // if(value[i] >='0'&& value[i]<='9' && patterns[i]=='#'){
//filterValue.push(value[i])}
//}console.log(filterValue )
 //phoneInput.value = filterValue.join('')}

let pattern = ["#","#","#","#","/","2","#","#","#","-","#","#","#","-","#","#"]
let filterValue = []
let patterns =  ["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"]