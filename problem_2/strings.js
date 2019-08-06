let input_value = "foo(bar(baz))blim";
let expresion = '(\\(([^()]*)\\))';
const regex = RegExp(expresion);

function revert(input_string){
    return input_string.split('').reverse().join('');
}

function clean(input_string){
    return input_string.slice().replace(/[()]/gi,'');
}

function getCleanReversedString(match){
    return revert(clean(match));
}
function step(input_string){
    return input_string.replace(regex,getCleanReversedString);
}

function recursiveProcessing(target_string){
    while(regex.test(target_string)){
       target_string = step(target_string);
        //recursiveProcessing(target_string);
    }
    return target_string;
}

console.log(recursiveProcessing(input_value))




// regex to get clean parentesis: (\(([^()]*)\))