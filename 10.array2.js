const marvel_heros = ["thor","ironman","loki"]
const dc_heros =["superman","flash","loki"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3,1]);
// console.log(marvel_heros[3,1]);

 const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const new_heros = [...marvel_heros,...dc_heros]
// console.log(new_heros);

const another_arr = [1,2,[4,5,[6,7,8],0,[1,2,9,]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);

// console.log(Array.isArray("yogesh"));
// console.log(Array.from("yogesh"))
// console.log(Array.from({name:"yogesh"}))

