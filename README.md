# Unexpected Type Coercion in JavaScript Arithmetic

This example demonstrates a common error in JavaScript stemming from its loose typing system.  When performing arithmetic operations, JavaScript will implicitly coerce types, which can lead to unexpected results if not handled carefully.

The `bug.js` file showcases the issue: adding a number and a string results in string concatenation instead of numerical addition.  The `bugSolution.js` file provides a solution using explicit type checking or conversion to ensure the correct arithmetic behavior.