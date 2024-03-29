
Problem 2

Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
Input/Output

[input] string inputString

A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence.

Guaranteed constraints:
0 ≤ inputString.length ≤ 50.

[output] string

Return inputString, with all the characters that were in parentheses reversed.

Example cases:

Input: inputString: "(bar)"
Expected Output: "rab"

Input: inputString: "foo(bar)baz"
Expected Output: "foorabbaz"

Input: inputString: "foo(bar)baz(blim)"
Expected Output: "foorabbazmilb"

Input: inputString: "foo(bar(baz))blim"
Expected Output: "foobazrabblim"

Input: inputString: ""
Expected Output: Empty

Input: inputString: "()"
Expected Output: Empty
