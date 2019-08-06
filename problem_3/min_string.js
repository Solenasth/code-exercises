function MinWindowSubstring(strArr) { 
    // code goes here 
    let query = strArr[1].slice().split('');
    let bigString = strArr[0].slice();
    let data = getQueryData(query);
    let minWindow ;
    let currentSubstringSize = query.length;

    while(!minWindow){
        let substrings = getAllSubStrings(bigString,currentSubstringSize);
        currentSubstringSize++;
        minWindow=evaluateSubstringArray(substrings,data);
    }
    return minWindow;  
}

let strArr=["aaffhkksemckelloe", "fhea"];

function getAllSubStrings(bigString,size){
    let allSubstrings = new Array();
    let index = 0;
    while(index + size <= bigString.length){
        allSubstrings.push(bigString.substring(index,index+size));
        index++;
    }
    return allSubstrings;
}



// IMPERIUS ==================================

// helper function to get query data.
function addToQueryObject(character,queryObject){
    queryObject[character] ?
    queryObject[character]++ : 
    queryObject[character] = 1;
    return queryObject; 
}

function substractFromQueryObject(character, queryObject){
    queryObject[character] && queryObject[character] > 1 ? 
    queryObject[character]-- :
    queryObject[character] = 0;
    return queryObject;
} 

function getQueryData(query){
    let data = {};
    query.forEach((character) => {addToQueryObject(character,data)}); 
    return data;
}

//helper functions to validate substrings

function match(queryData, character){
    return queryData[character] && queryData[character] > 0 ? true : false;
} 

function hasAllCharacters(queryData) {
    return (getQueryWeight(queryData) === 0 ? true : false);
}

function getQueryWeight(queryData){
    totalWeight = Object.values(queryData).reduce(function (sum, element) {
        return sum + element;
    }, 0);
    return totalWeight;
}

function validateSubString(substring,queryData){
    let dataClone = {...queryData};
    substring.split('').forEach(function(char){
        if(match(dataClone,char)){
            dataClone=substractFromQueryObject(char,dataClone);
        }
        return dataClone
    })
    return hasAllCharacters(dataClone);
}

//functions to check all substrings in an array, since the substrings are build smallest possible first, the first coincidence must be the smallest as well

function evaluateSubstringArray(substringArray, queryData){
    return substringArray.find((element) => validateSubString(element,queryData)); 
}

