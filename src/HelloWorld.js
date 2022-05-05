import React from "react";

// Function name has an initial cap
function HelloWorld() {
  // The return statement must return a single element
  // Parentheses group the JSX so that
  // it can break over several lines for readability
  return (
    // <div className = "helloWorld">
    //   <h1>Hello World!</h1>
    //   <h3>Wow! React</h3>
    //   <h2>⭐️ Welcome to React ⭐️</h2>
    // </div>
    <main>
      <p>React is the #1 most popular frontend library in the world!</p>
      <button>Upvote React!</button>
    </main>
  );
}

// Export the component so that it can be imported in other files
export default HelloWorld;
