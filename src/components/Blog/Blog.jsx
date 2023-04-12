import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div >
            <h2 className='blog'>1.when we use context api?</h2>
            <p className='blog'>ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.when we need pass data parent to many other child then we use context api.</p>
            <h2>2.What is custom hook?</h2>
            <p>ans: A custom hook in React is a reusable function that encapsulates a particular piece of logic and can be shared between components. Custom hooks are created using the use prefix in their name and follow the same rules as regular hooks in React. They can use other hooks, state variables, and props, and can return any value, including JSX. Custom hooks are a way to extract common functionality from components and reuse it across your application, improving code reuse and reducing duplication. By creating custom hooks, we can simplify the code in our components, improve readability and maintainability, and make our application more modular and easier to test. </p>
            <h2>3.what is useRef & why we need it?</h2>
            <p>ans: useRef is a built-in hook provided by React that allows us to create a mutable variable that persists across re-renders of a functional component.
                we can use useRef to hold a reference to a DOM element, a value, or any other data that needs to persist across re-renders. Unlike state variables, useRef does not trigger a re-render when its value changes.</p>
            <h2>4.What is UseMemo & why wee need</h2>
            <p>ans: useMemo is a built-in hook provided by React that allows us to optimize the performance of your functional components by memoizing the return value of a function, and only re-computing it when the dependencies change.
             we can use useMemo to memoize expensive computations, and avoid re-computing them unnecessarily. The hook takes two arguments: a function that returns a value, and an array of dependencies. If any of the dependencies change, the function will be re-executed and the new value will be returned. If the dependencies do not change, the memoized value will be returned without re-executing the function. </p>
        </div>
    );
};

export default Blog;