# MongoDB $inc Operator Error: Handling Non-Existent Fields

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB: attempting to increment or decrement a field that does not yet exist in the document.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version.

The issue arises because `$inc` directly modifies the field; it doesn't create the field if it's missing.  This leads to an error. The solution involves using the `$setOnInsert` operator in conjunction with `$inc` to handle cases where the field might not exist.