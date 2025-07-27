function stringChop(str, size) {
  // your code here

	// If str is null or size is not valid, return empty array
  if (!str || size <= 0) return [];

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    // Slice from current index up to size
    result.push(str.slice(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
