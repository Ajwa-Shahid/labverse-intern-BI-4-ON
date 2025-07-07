// sort method (changes original Array no gives new Array)
// takes callback func as an input


// ASCII TABLE 


//char : ascii value
//to sort string we use Ascii Code

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort  (Numbers as Strings)

const SortNumberArray=[5,9,1200,400,3000]; //JS sort by converting numbers to string 
// ["5","9","1200","400", "3000"] JS will see the string's first character's Ascii code
// [ 53, 57,  49,   52,    51 ]   JS will sort according to these Ascii values of 1st characters
// [49,51,52,53,57]  ->  [1200,3000,400,5,9]

console.log(SortNumberArray.sort());       


console.log(SortNumberArray.sort((a, b)=> a-b));// (a,b) is parameters and a-b is returning value of func
console.log(SortNumberArray.sort((a,b)=> b-a));
// a- b to sort in Ascending(small to big)   OR  b - a to sort in Descending (big to small)
// a-b -> negative (5 - 9 = -4 )so replacing will not take place (a, b) (5, 9)
// a-b -> positive (1200-400= 800) so replacing will take place as (b, a) (400, 1200)




//sort (Strings as A_to_Z) as in dictionary sorted 

const sortStringArray = ["Sarib", "Ajwa", "Zukhruf", "Salar", 'abcd', 'aabc', 'ABC']; //will sort Capitals first then Smallest alphabets
console.log(sortStringArray.sort());



//Realistic Example

// price lowToHigh HighToLow

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh Sorting

const lowToHigh = products.slice(0).sort((a,b)=> a.price-b.price);        //a will contain first whole obj and b will contain next whole object
console.log(products);     //due to slice, original array is cloned so that original array doesn't lost 
console.log(lowToHigh);

// highToLow Sorting

const highToLow = products.slice(0).sort((a,b)=> b.price-a.price);
console.log(highToLow);