import React from "react";

const Blog = () => {
  return (
    
    <div>
       
      <h1 className=" text-5xl text-center">this is Blog Page</h1>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        Click to see the ans: Tell us the differences between uncontrolled and controlled components? 
        </div>
        <div className="collapse-content">
          <p>Differences between uncontrolled and controlled components:
In React, a controlled component is a component that has its state managed by React, while an uncontrolled component is a component that manages its state on its own. In other words, a controlled component is tightly controlled by React, while an uncontrolled component is loosely controlled.
Controlled components rely on state to control the value of the component, while uncontrolled components rely on refs to access the value of the component. Controlled components allow for easier management of form data, while uncontrolled components offer more flexibility and are generally easier to implement.</p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        Click to see the ans: How to validate React props using PropTypes?
        </div>
        <div className="collapse-content">
          <p>PropTypes is a built-in feature of React that allows developers to validate the props passed to a component. To validate props using PropTypes, you can import the PropTypes library and add propTypes property to the component. Then, specify the expected type and, if necessary, other constraints for each prop using the appropriate PropTypes function.</p>
        </div>
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        Click to see the ans: The difference between nodejs and express js:
        </div>
        <div className="collapse-content">
          <p>Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. It provides a platform for building scalable network applications using JavaScript. Express.js, on the other hand, is a web application framework built on top of Node.js.
While Node.js provides the basic tools for building network applications, Express.js adds more advanced features like routing, middleware, and templating. Express.js simplifies the process of building web applications by providing a set of high-level abstractions that make common tasks like handling requests and responses, routing, and serving static files easier.</p>
        </div>

      </div>



<div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        Click to see the ans: What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p>A custom hook is a function that uses one or more built-in React hooks to encapsulate complex logic and provide a simpler interface to reuse that logic across multiple components. Custom hooks are created using the same syntax as regular functions and can return any value or object that a regular function can.</p>
        </div>

      </div>


      {/* last div */}
    </div>




  );
};

export default Blog;
