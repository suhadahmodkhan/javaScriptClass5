var numbers = [1,8,6,9]
var largest = numbers[0]

for (var i = 0 ; i < numbers.length ; i++){
    console.log( "index",i , largest)
    if(largest < numbers[i]){
        largest = numbers[i]
        console.log(i , largest)
    }
}



console.log(largest)
