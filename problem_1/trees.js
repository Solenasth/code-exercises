// -1 = 🌳
// > -1 = 👨
// sort 👨 but not 🌳 by height values
// test_input = [-1, 150, 190, 170, -1, -1, 160, 180]
// expected_output = [-1, 150, 160, 170, -1, -1, 180, 190]


//solucion 1: filter(>0) , sort , assign back 

let test_input =  [-1, 150, 190, 170, -1, -1, 160, 180]; 

function getPeople(TreesAndPeeps){
  return TreesAndPeeps.filter(element => element>-1); 
}

function sortPeople(Peeps){
    return Peeps.slice().sort((a,b)=>a-b);
}

function getSortedPeople(test_input){
    return sortPeople(getPeople(test_input));
}

function reasignPeople(input){
    let sorted = getSortedPeople(input); 
    return input.map((item) => {
       return (item > 0) ? 
         sorted.shift() : item 
    });
}


// this function is just graphical sugar it does nothing functional and can be ignored.
function sugar(result){
    return result.map((item)=>{
       return (item < 0) ? 
       "🌲" : ("🧔 " + item +"cm")
    })
}

console.log(reasignPeople(test_input));
console.log(sugar(reasignPeople(test_input)));


