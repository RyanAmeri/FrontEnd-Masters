# JavaScript Hard Parts V2, notes

[Slides](https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf)

## Execution context

Created to run the code of a function. Has two parts:

- Thread of execution
- Memory

## Call stack

JS engine keeps track of what is currently running.

- When a function is called, it's added to the top of the call stack.
- When execution is finished, the function is removed from the call stack.
- Whatever is at the top of the call stack, is the function currently being run.

The three core components of JS:

1. Thread of Execution
2. Memory
3. Call stack

## Generalising Functions

We make our functions generalizable mostly using two methods:

1. Leave some of the data to be determined later (in the form of parameters)
2. Leave some of the code to be determined later (this is called higher order functions)
