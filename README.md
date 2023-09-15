
# Course-Registration




## Project Features

- Course Cart Functionality
- Toast Notifications
- Dynamic State Management with React Hooks


## State management of my project

In my project, state management is handled using React hooks, specifically the useState hook. State management is essential in React applications to keep track of and update data that affects the user interface. Here's how state is managed in this project:

## 1. Initialization: 
Initially, the project code declares several state variables using the useState hook. Each state variable corresponds to a piece of data that needs to be tracked and potentially updated in response to user actions.

## 2. Usage within handleAddCourseName: 
Inside the handleAddCourseName function, which is called when a user tries to add a course, state variables are updated based on the logic within the function. For example:

- "setAddCourseName(newAddCourseName)" updates the addCourseName state with a new array that includes the newly added course.

- "setRemainingHour(totalRemaining)" updates the remainingHour state to reflect the remaining credit hours.
      setTotalHour(hour) updates the totalHour state to reflect the total credit hours.

- "setTotalPrice(totalAmount)" updates the totalPrice state to reflect the total price of selected courses.

## 3. Rendering: 
The state variables' values are used in the JSX returned by the render function to dynamically display information to the user. For example, the addCourseName, remainingHour, totalHour, and totalPrice states are passed as props to child components and displayed in the user interface.
