const HashMap = require("./index.js");

const test = new HashMap(16, 0.75);

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log("Initial bucket distribution:");
printBucketDistribution(test);
console.log("Load factor:", test.size / test.capacity);

test.set('apple', 'green')
test.set('moon', 'silver')

console.log(test.length());
console.log(test.entries());

console.log("Bucket distribution after changes:");
printBucketDistribution(test);
console.log("Load factor:", test.size / test.capacity);

function printBucketDistribution(map) {
  for (let i = 0; i < map.buckets.length; i++) {
    console.log(`Bucket ${i}: ${map.buckets[i].length} items`);
  }
}
