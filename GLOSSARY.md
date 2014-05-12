# Composable

Function composition is an act or mechanism to combine simple functions to build more complicated ones. Like the usual composition of functions in mathematics, the result of each function is passed as the argument of the next, and the result of the last one is the result of the whole. <p>The ability to easily compose functions encourages factoring (breaking apart) functions for maintainability and code reuse. More generally, big systems might be built by composing whole programs.</p> (<a href="https://en.wikipedia.org/wiki/Function_composition_(computer_science)">Source.</a>)

# Predicate function

A function that when called will return either `true` or `false` depending on some condition. The return value is dependant on the input, in case the predicate function is a pure function.

# Pure function

A function may be considered a pure function if both of the following statements about the function hold: <ul><li>The function always evaluates the same result value given the same argument value(s). The function result value cannot depend on any hidden information or state that may change while program execution proceeds or between different executions of the program, nor can it depend on any external input from I/O devices.</li><li>Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices.</li></ul><p>The result value need not depend on all (or any) of the argument values. However, it must depend on nothing other than the argument values. The function may return multiple result values and these conditions must apply to all returned values for the function to be considered pure. If an argument is call by reference, any parameter mutation will alter the value of the argument outside the function, which will render the function impure.</p>(<a href="https://en.wikipedia.org/wiki/Pure_function">Source.</a>)

# Array-like

An array like object is one that can be looked at and processed as a sequence of elements, like an array. In JavaScript, a common example of an array-like object is the <code>arguments</code> object in functions, which has a <code>length</code> property and can be accessed by index, but it doesn't include functions from <code>Array.prototype</code> such as <code>slice</code> or <code>map</code>. Anything array-like can be turned into an array by <a href="./man/array/to-array.html"><code>fun/array/to-array</code></a>.

# Trampoline

<p>A trampoline is a loop that iteratively invokes thunk-returning functions (continuation-passing style). A single trampoline suffices to express all control transfers of a program; a program so expressed is trampolined, or in trampolined style; converting a program to trampolined style is trampolining. Programmers can use trampolined functions to implement tail-recursive function calls in stack-oriented programming languages.</p>(<a href="https://en.wikipedia.org/wiki/Trampoline_(computing)">Source.</a>)