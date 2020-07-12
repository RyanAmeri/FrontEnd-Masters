# Learnings for solving YDKJS Getting Started Exercices
## Comparison Practice
I solved this by turning everything into Date objects. This avoided using comparisons basically, but when talking about time, using Date makes sense to me since it has already implemented the required logic. Looking at the suggested solution, I see that the author is using regexp and has implemented the logic of hours and seconds manually. This is both more verbose and less readable to me, and is reinventing the wheel IMO. 
## Closure Practice
Wrote my first closure. This was so satisfying. I pretty much _got_ it the first time around. I put some breakpoints in afterwards and really observed the execution of the program. Fascinating!
## Prototypes Practice
### Initial Thoughts
Struggled to get my head around this at first. But dealing with _this_ wasn't as difficult, I mostly struggled with 
1) How to return the previous and the next symbol (ended up returning an array and had to write my custom mod function for it)
2) How to display the rows currectly (invert the matrix)
I'm happy with the result, but not sure if this was such a good use of dealing with _this_? Or maybe I've got the hang of it already. 
### After reading the hints
OK so the hints say that I shouldn't modify the reel object directly, and should create temporary reel objects instead. 
Redid the exercise according to the instruction. The only benefit I see in this is that it doesn't change the original object and puts the logic in the slot machine. This is better. 
However, honestly, I'd rather do these as class. With constructor and everything. Seems so much cleaner to me. 