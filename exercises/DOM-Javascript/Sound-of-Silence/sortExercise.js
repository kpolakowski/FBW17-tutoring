const tracks = [
    {artistName:"aaaaa",trackName:"wwww", price:10},
    {artistName:"zzzzz",trackName:"bbbb", price:15},
    {artistName:"hello",trackName:"gggg", price:12},
    {artistName:"xxxxx",trackName:"oooo", price:13},
    {artistName:"ccccc",trackName:"aaaa", price:11}
]

// SORTING BY PRICE ASCENDING
tracks.sort((trackA,trackB)=>{
    console.log(trackA.price,trackB.price);
    return trackA.price - trackB.price;
})

tracks.sort((trackA,trackB)=> {
    if(trackA.artistName>trackB.artistName){
        return 1
    } else if(trackA.artistName<trackB.artistName){
        return -1
    } else{
        return 0
    }
})

console.log(tracks)

// 10,11 = 10 - 11 = -1
// 11,10 = 11 - 10 = 1
// 11,11 = 0

const names = ["bbbbb","aaaaa","xxxx","dddd"]
console.log("a">"1")

names.sort((A,B)=> {
    if(A>B){
        return -1
    } else if(A<B){
        return 1
    } else{ // A===B
        return 0
    }
})
console.log(names)

// A,B,C,D....a,b,c,d
// a > A

// ASCII table


// FALSY values:
/* 
0,
null,
undefined,
""
*/