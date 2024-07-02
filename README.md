# project-hashmap

This is an assignment from The Odin Project. The aim is to practice implementing hash maps by creating a HashMap class or factory function, then adding methods and test the hash map.

To run the tests, type:

node hashMapTest.js

in the Terminal (Node is required).

It will log the number of entries, load factor, and number of items per bucket. This helps visually illustrate how items get distributed between buckets: some may have 0 items while others have 2 or more.

For instance, two different keys can produce the same hash value (or the same bucket index after modulo operation), in this case they end up in the same bucket. This is called a collision, which can lead to some buckets having multiple items.

Also with a lower load factor, fewer collisions will happen.
