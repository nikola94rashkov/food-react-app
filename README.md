# React recipes app

**This project was created for educational purposes.**

## How to start the project locally

- Clone project in your local folder
- Install all packages with: `npm install` 
- Start the project with: `npm start`

## Scripts before deployment

- `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Description

### Users Authentication 

To create and store our user's information we're using email and password [authentication](https://firebase.google.com/docs/auth) provided by firebase.

### Non relational database

To store our collection of data, we use the [firestore API](https://firebase.google.com/docs/firestore), where we store the individual records called "documents".

### Image Storage

To store your images, we use the [firebase cloud storage](https://firebase.google.com/docs/storage), where all files are converted into links and used in our recipes.


## Functionalities

- Register
- Login
- CRUD
- Upload image from file.
- Router guards

**The project functionalities are based on firebase. [Click here to see the demo](https://react-recipies-app.web.app/)**