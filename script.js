// [1] Return the A-Z.
// input=Hello123@
// op=H
// let str="Hello123@";
// k=str.length
// console.log(k)
// for(i=0;i<=k;i++)
// {
//    console.log(num)}
//reverse
// var newstr="Hello123@";
// var newstr2=[]
// k=newstr.length
// // console.log(k)
// for(i=k;i<=k-1;i--){
//    newstr2=push;
// }
// console.log(newstr2)
//Find the second last character/digit/number in the input.
// let str="Hello123@";
// k=str.length
// let newstr="";
// // console.log(k)
// if(i=k-2;i<=k;k--){
//    i+=newstr;
//    console.log(newstr)
// }


// function countvowels(x) {

    let i = 0;
    let n=[];
    let m=[];
    for (const char of x) {
        if (
            char == "a" || char == "e" || char == "o" || char == "u" || char == "i") {
            // n.push(i[char])
            n.push(char)
        }
        else{
         m.push(char)
        }
    }
    console.log(n);
    console.log(m);

// countvowels('Hello123@');
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
//let str1 = 'codedamn'
//let array1 = str1.split();


// let str1 = 'Hello123@'
// let array1 = str1.split();
// x=str1.length
// let newstr3=""
// // let newarr2=array1.reverse();
// // console.log(newarr2)
// // let b=typeof(array1)
// // console.log(b)
// for(i=x;i<=0;i--)
// {
   
// }
// console.log(i)
function isUpperCase(Hello123)    
{    
return(aCharacter >= 'A') && (aCharacter <= 'Z');
}   
console.log()