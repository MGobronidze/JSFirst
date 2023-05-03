'use srtict'
// ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
for (let i=5; i<100; i++){
    // console.log(i)
}

// მოცემულია მასივი:
// Let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array1){
    if(item > 0 && item <10)
    {
        console.log(item)
    }
}

console.log("-----")
// მოცემულია მასივი
// Let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(item of array2 ){
    if(item==5){
        console.log("არის")
        break;
    }
}
console.log("-----")

// მოცემულია მასივi
// Let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3= [1, 2, 3, 4, 5];
let sum=0
for(item of array3){
    sum+=item
}
console.log(sum)
console.log("-----")


// მოცემულია მასივი:

// Let array4 = [1, 2, 3, 7, 6, 9];
// გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)
let array4 = [1, 2, 3, 7, 6, 9];
let sum2=0;
let average =0;
for(item of array4){
    sum2+=item
}
average= sum2/array4.length
console.log(average)
console.log("-----")

// მოცემულია მასივი
// Let array5 = [1, 2, 3, 7, 6, 9];
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა

let array5 = [1, 2, 3, 7, 6, 9];
for(item of array5){
    if(item==7){
        continue;
    }
    console.log(item)
}
console.log("-----")

// მოცემულია ობიექტი:
// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,
//   studentstatus: "active"
// };
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  }
console.log(user.studentstatus)  
console.log("-----")

// მოცემულია ობიექტი:
// let user = {
//     name: 'giorgi',
//     age:  20,
//     studentstatus: 'active'
// }

// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
// Hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


let user1 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
let result = user1.age<18 && user1.studentstatus=="active"? "Hellos":
    user1.name == "levani"?"Hello Levan":
    user1.studentstatus =="active" || user1.age < 25? "Hello World!":
    "error"
console.log(result)

console.log("-----")

// მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

// let array = [
//   [2, -3, 5, 10],
//   [25, -24, -11, 100],
//   [-6, -7, 10],
// ];
let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];
  
for (let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
        if(array[i][j]>0){
            console.log(array[i][j])
        }
    }
}

console.log("-----")

// let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// 1.ამოიღეთ მარტო ლუწი რიცხვები
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for(item of array6){
    if(item%2==0){
        console.log(item)
    }
}
// 2.ამოიღეთ კენტი რიცხვები 
for(item of array6){
    if(item%2==1){
        console.log(item)
    }
}
