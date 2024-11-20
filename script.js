function stringChop(str, size) {
  // Handle null or empty string case
  if (!str) return [];
  
  // Initialize an array to store the chunks
  const chunks = [];
  
  // Loop through the string and create chunks of the given size
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); // Convert size input to a number
alert(stringChop(str, size));
