function PermutationStep(num) { 
    return getNextPermutation(num);
  }
     
let testArgs = 41352;
console.log(PermutationStep(testArgs));
  
  //algorithm (non brute force) =======================
      // flip arrays (easier to understand for my monkey brain)
      // traverse from left to right until we find the first element that is smaller that its predecesor
      // this number is our target
      // we flip our target and the previous number to get a BIGGER permutation. 
      // this permutation is bigger, but is not the smallest of the possible bunch. 
      // to find the smallest, we split the array at TARGET first half is HEAD, second is TAIL
      // we sort the HEAD array then join Head and Tail
      // we flip back the array
      // the result is the next permutation that is bigger than the given number, but is the smallest from the possible ones.
      
  //example step by step
  // 2 5 3 1 4 
  // 2 5 3 1 4
  // 2 3 5 1 4
  // 2 3 // 5 1 4  
  // 3 2 // 5 1 4 
  // 3 2 5 1 4
  // 4 1 5 2 3
  
  //============== helper functions ======================= 
  
  //gets an iterable from an integer
  function getArrayFromNum(num){
      return (''+num).slice().split('');
  }
  
  //gets an integer from an iterable 
  function getNumFromArray(numbers){
      return numbers.join('');
  }
  
  //gets the target element to swap (the first element that is smaller than its predecesor) or undefined if not found.
  function getTargetToFlip(data){
      let target = 1; 
      for (let index = 0 ; target < data.length ; index++ ,target++){
          if(data[target] < data[index]){
              return target;
          }
      }
      return undefined; 
  }
  
  //swaps positions of an element in array with the previous one. 
  function swap(data, target){
      let originChar = data[target-1];
      let targetChar = data[target];
      let tempArr = data.slice();
      tempArr.splice(target,1,originChar);
      tempArr.splice(target-1,1,targetChar);
      return tempArr;
  }
  
  // splits the array in the sub Arrays given a target index
  function getSubArrays(array,target){
      return [array.slice(0,target),array.slice(target)];
  }
  
  //flips the array
  function flipArray(numbers){
      return numbers.slice().reverse();
  }
  
  //returns the processed array after sorting and joining given a base and a target.
  function processArrayWithTarget(data,target){
      data = swap(data, target);
      let subArrays = getSubArrays(data,target);
      subArrays[0].sort((a,b)=>b-a);
      let response = [...subArrays[0],...subArrays[1]];
      return getNumFromArray(flipArray(response));
  }
  
  // gets the next smallest next permutation
  function getNextPermutation(numbers){
      let data = flipArray(getArrayFromNum(numbers));
      let target = getTargetToFlip(data);
      return !target ? -1 : processArrayWithTarget(data,target);
  }
  
  
  