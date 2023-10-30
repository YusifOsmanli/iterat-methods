
// Massivin ilk elementini əldə etmək üçün JavaScript funksiyasını yazın.
//  'n' parametrinin ötürülməsi massivin ilk 'n' elementlərini qaytaracaq. (filter() və ya forEach() və ya map() və ya dilim()
//   funksiyalarından istifadə etməlidir)

// function first(arr,n=1){
//     if(n<=0){
//         return [];
//     }else{
//         return arr.slice(0,n)
//     }
// }

// console.log(first([1,3,4,5,],2));



// Aşağıdakı massivin bütün elementlərini sətirdə birləşdirmək üçün sadə JavaScript proqramı yazın.

// function join ( arr,isare){

// return arr.join(isare)

// }
// console.log(join([1, 73, 99, 20], "*"))
// console.log(join([1, 73, 99, 20], "/"))

// // Sətiri giriş kimi qəbul edən və hər simvolun hərfini dəyişdirən JavaScript proqramını (funksiyasını) yazın


// // 4. Massivi yalan, qeyri-müəyyən, boş sətirlər, sıfır, null kimi bütün lazımsız elementlərdən təmizləyən metod yazın. (filtr() funksiyasından istifadə etməlidir)

// // function clear(arr){
// //     return arr.filter(Boolean);

// // }
// // console.log(clear([0, 1, false, 2, undefined, '', 3, null]));



// // // Dublikatsız massivi qaytaran metod yazın.



// function clearDuplicate(arr){
//     let tek=arr.filter((item,index) =>  {
//         return arr.indexOf(item) === index;
// });
// return tek
// }




// console.log(clearDuplicate(['a', 2,"z" ,'d', 2, 'a', 14, 14, 's',"z", false]))


// // İki massivi müqayisə edən və eyni olduqda doğru qaytaran funksiya yazın.
//  function isEqual(arr,arr1){
//     if(arr.length===arr1.length){
//         return true
//     }else{
//         return false
//     }
//  }
//  console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]))
//  console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) 
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) 
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]))