{
    // 50 - misol
    // function singleNumber(nums) {
    //     let map = new Map();
        
 
    //     nums.forEach(num => {
    //         map.set(num, (map.get(num) || 0) + 1);
    //     });
        

    //     return [...map.keys()].filter(key => map.get(key) === 1);
    // }
    
    // console.log(singleNumber([4, 1, 2, 1, 2, 9, true]));
    
}


{
    // 51 - misol
    // function middleNumber(arr) {
    //     const n = arr.length;
    //     if (n % 2 === 1) {
         
    //         return arr[Math.floor(n / 2)];
    //     } else {
         
    //         const mid1 = arr[Math.floor(n / 2) - 1];
    //         const mid2 = arr[Math.floor(n / 2)];
    //         return (mid1 + mid2) / 2;
    //     }
    // }
    
    // console.log(middleNumber([1, 2, 3, 4, 5]));
    // console.log(middleNumber([1, 2, 3, 4]));
    
}

{
    // 52 - misol
    // let products = [
    //     {id: 1, name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
    //     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
    //     {id: 3, name: "Macbook", price: 17000, rating: 4.7, discount: 40},
    //     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
    //   ];
      
    //   let filteredProducts = products.filter(product => product.id > 3);
    //   console.log(filteredProducts);
      
}

{
    // 53 - misol
    // function isAlphabetic(str) {
    //     return /^[a-zA-Z]+$/.test(str);
    //   }
      
    //   console.log(isAlphabetic("Hello"));
    //   console.log(isAlphabetic("Hello123"));
      
}

{
    // 54 - misol
//     const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const countOccurrences = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log(countOccurrences);


}

{
    // 55 - misol
//     let str = "Hello world";

// let wordLengths = str.split(' ').map(word => word.length);
// console.log(wordLengths); // Output: [5, 5]

}

{
    // 56 - misol
//     let str2 = "salom dunyo";

// let hasSpace = str2.split('').some(char => char === ' ');
// console.log(hasSpace); // Output: true

}

{
    // 57 - misol
//     let obj = {a: 2, b: 5, c: 7};

// let concatenated = Object.entries(obj).map(([key, value]) => key + value);
// console.log(concatenated); // Output: ['a2', 'b5', 'c7']

}

{
    // 58 - misol
    // const pupils = [
    //     {name: "Elbek", procent: 95},
    //     {name: "Zafar", procent: 78},
    //     {name: "Aziz", procent: 83},
    //     {name: "Jasur", procent: 88},
    //     {name: "Bobur", procent: 66},
    //     {name: "Kamron", procent: 75},
    //   ];
      
    //   const { passed, failed } = pupils.reduce(
    //     (acc, pupil) => {
    //       pupil.procent >= 80 ? acc.passed++ : acc.failed++;
    //       return acc;
    //     },
    //     { passed: 0, failed: 0 }
    //   );
      
    //   console.log(`Passed: ${passed}, Failed: ${failed}`);
    //   // Output: Passed: 4, Failed: 2
      

}

{
    // 59 - misol
    // function findMedianSortedArrays(nums1, nums2) {
        
    //     let mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
        
    //     let length = mergedArray.length;
    //     if (length % 2 === 0) {
            
    //         return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    //     } else {
            
    //         return mergedArray[Math.floor(length / 2)];
    //     }
    // }
    
    // let nums1 = [1, 2], nums2 = [3, 4];
    // console.log(findMedianSortedArrays(nums1, nums2)); 
    
}


{
    // 60 - misol
    // function searchMatrix(matrix, target) {
    //     if (!matrix.length || !matrix[0].length) return false;
    
    //     let rows = matrix.length;
    //     let cols = matrix[0].length;
        
        
    //     let left = 0, right = rows * cols - 1;
        
    //     while (left <= right) {
    //         let mid = Math.floor((left + right) / 2);
    //         let midValue = matrix[Math.floor(mid / cols)][mid % cols];
            
    //         if (midValue === target) {
    //             return true;
    //         } else if (midValue < target) {
    //             left = mid + 1;
    //         } else {
    //             right = mid - 1;
    //         }
    //     }
        
    //     return false;
    // }
    
    // let matrix1 = [
    //     [1, 3, 5, 7],
    //     [10, 11, 16, 20],
    //     [23, 30, 34, 60]
    // ];
    // console.log(searchMatrix(matrix1, 3));
    // console.log(searchMatrix(matrix1, 13));
    
}

{
    // 65 - misol
    // function objectToStringArray(obj) {
    //     return Object.entries(obj).map(([key, value]) => `${key}${value}`);
    // }
    
    // let inputObj = {a: 2, b: 5, c: 7};
    // console.log(objectToStringArray(inputObj));
    
}

{
    // 67 - misol
    // function separateDuplicates(arr) {
    //     let seen = new Set();
    //     let duplicates = [];
    //     let unique = arr.filter(item => {
    //         if (seen.has(item)) {
    //             duplicates.push(item);
    //             return false;
    //         } else {
    //             seen.add(item);
    //             return true;
    //         }
    //     });
    //     return { unique, duplicates };
    // }
    
    // let inputArr = [1, 2, 3, 1, 4, 5, 2];
    // console.log(separateDuplicates(inputArr)); 

    
}

{
    // 68 - misol
    // function getTruthyFalsy(arr) {
    //     return {
    //         truthy: arr.filter(Boolean),
    //         falsy: arr.filter(item => !item)
    //     };
    // }
    
    // let inputArray = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
    // console.log(getTruthyFalsy(inputArray));
  
    
}

{
    // 69 - misol
    // Array.prototype.sumNumbers = function() {
    //     return this.reduce((sum, item) => typeof item === 'number' ? sum + item : sum, 0);
    // };
    
    // let numArray = [1, 2, 3, 4, "a", "b"];
    // console.log(numArray.sumNumbers());
    
}

{
    // 70 - misol
    // String.prototype.countVowels = function() {
    //     return (this.match(/[aeiou]/gi) || []).length;
    // };
    
    // let str = "Hello World";
    // console.log(str.countVowels());
    
}

{
    // 71 - misol
    // String.prototype.getLength = function() {
    //     return this.length;
    // };
    
    // let exampleString = "sultonqul";
    // console.log(exampleString.getLength()); 
    
}


{
    // 72 - misol
    // function isPalindrome(str) {
    //     return str.toLowerCase().replace(/[^a-z0-9]/g, '') === str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
    // }
    
    // let inputString = "A man, a plan, a canal: Panama";
    // console.log(isPalindrome(inputString));
}