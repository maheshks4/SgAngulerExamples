function disemvowel(str) {
  console.log("in disemvowel") ;
  
   return str.replace(/a|A|E|e|i|o|u/g, "");  // one test would fail.
}