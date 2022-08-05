# React modal

[![forthebadge](https://img.shields.io/badge/Made%20with-Create%20React%20App-%230bcca7)](https://reactjs.org/docs/create-a-new-react-app.html)
[![forthebadge](https://img.shields.io/badge/React-v18.2.0-%2361dafb)](https://reactjs.org/)

This modal is designed to be modular and work inside a React project.

## What does the modal look like

![Screenshot 2022-08-05 at 10-31-38 React App](https://user-images.githubusercontent.com/84042427/183037117-ed753a40-7c32-4e24-8fa6-c97ab5b879d1.png)

---

## Installation

Install the modal in your project:

```
npm install ....
```

## Usage

Make the modal work properly by setting its local state and adding the function that changes its state.
Follow the example below to learn how to embed the modal in your component:

```javascript
// Import the modal into your component
import Modal from ".....";

const MyComponent = () => {
   // Defines the opening state of the modal
   const [modalIsOpen, setModalIsOpen] = useState(true);

   // Add a function that will be used to close the modal when you click on the "close" button
   const closeModal = () => {
      setModalIsOpen(false);
   };

   // Add the modal in the "return" of your component, and give the values to its props
   return (
      <Modal
         modalState={modalIsOpen} // Current state of the modal
         setModalState={closeModal} // Event that closes the modal
         text="I am a modal!" // Text to display inside the modal
      />
   );
};
```

#### _Props used :_

| Props         |   Type   |                                  Description |
| ------------- | :------: | -------------------------------------------: |
| modalState    | boolean  |                      Open or close the modal |
| setModalState | function | Modifies the opening or closing of the modal |
| text          |  string  |                  Text displayed in the modal |

## Example

If you want to embed the modal in a form, see the example below:

<details><summary>See the example</summary>

```javascript
// We add a modal that launches when the form is submitted :

// Import the modal into your component
import Modal from ".....";

const MyForm = () => {
   // We start by setting the state of the modal to "false" in order to close it.
   const [modalIsOpen, setModalIsOpen] = useState(false);

   // In the form submit function, we change the state of the modal to "true" so that it opens when the form is submitted
   const submitForm = () => {
      setModalIsOpen(true);
   };

   // We add a function that will close the modal when we click on the "close" button
   const closeModal = () => {
      setModalIsOpen(false);
   };

   // We add the modal in the "return" of our component, and we give the values to its props
   return (
      <Modal
         modalState={modalIsOpen} // Current state of the modal
         setModalState={closeModal} // Event that closes the modal
         text="Form sent!" // Text to display inside the modal
      />
   );
};
```

</details>

## Modal Styles

The modal is styled with css.

## License

[MIT](https://choosealicense.com/licenses/mit/)
