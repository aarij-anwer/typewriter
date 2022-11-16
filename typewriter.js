const sentence = "hello there from lighthouse labs";


// for (const char of sentence) {
//   setTimeout(() => {
//     // print the char here
//     process.stdout.write(char);
//   }, 1000);
// }

let delay = 0;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, delay);
  delay += 50;
  if (i === sentence.length - 1) {
    setTimeout(() => {
      console.log("");
    }, delay);
  }
}





