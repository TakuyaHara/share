export default function() {
  // === if ===
  if (false) { // Misses
    "foo";
  }

  // === if, else ===
  if (false) { // Misses
    "foo";
  } else {
    "bar";
  }
  
  if (true) {
    "foo";
  } else { // Misses
    "bar";
  }

  // === if, else-if ===
  if (false) { // Misses
    "foo";
  } else if (false) { // Misses
    "bar";
  }

  if (false) { // Misses
    "foo";
  } else if (true) {
    "bar";
  }

  if (true) {
    "foo";
  } else if (false) { // Misses
    "bar";
  }  

  // === if, else-if, else ===
  if (false) { // Misses
    "foo";
  } else if (false) { // Misses
    "bar";
  } else {
    "baz";
  }

  if (false) { // Misses
    "foo";
  } else if (true) {
    "bar";
  } else { // Misses
    "baz";
  }

  if (true) {
    "foo";
  } else if (false) { // Misses
    "bar";
  } else { // Misses
    "baz";
  }
};