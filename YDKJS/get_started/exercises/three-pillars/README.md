# Three Pillars of JS

This is an exercise to briefly practice the three pillars of JS: Types / Coercion, Scope / Closures, and `this` / Prototypes.

## Instructions

The code of this exercise can be executed via Node.js or in the console tab of your browser's developer tools.

1. In the `printFavoriteBooks()` function, make sure there's no accidental type conversion (ie, from number to string).

	Hint: Use `String(..)` to coerce something to a string type.

2. Move the `addFavoriteBook(..)` and `printFavoriteBooks()` functions into the `Bookshelf` class as methods. Modify them so they use the `this` keyword to access the `favoriteBooks` array.

	Hint: `class` methods don't use the `function` keyword, just their name.

3. Fill out the definition of the `loadBooks(..)` function, which should receive an instance of the `Bookshelf` class that you will pass to it.

4. `loadBooks(..)` should call the provided `fakeAjax(..)`, using `BOOK_API` as the URL and an inline function expression as the callback.

5. The callback will be passed an array of book names. Loop through this array, passing each book name to the `addFavoriteBook(..)` method of the `Bookshelf` instance passed to `loadBooks(..)`. Then call the `printFavoriteBooks()` method.

6. Create an instance of `Bookshelf` class, and pass it as an argument to `loadBooks(..)`.

	Hint: Class instantiation: `new Whatever()`.
