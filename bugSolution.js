function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    //Handle type mismatch appropriately, e.g., throw an error or perform type conversion
    console.error('Invalid input types'); 
    return NaN; //Or throw an error
  }
}
foo(1,2);
foo(1,'2');