/*
Name: Patrick Kelly
Course: ICT4510 Advanced Website Design and Management

This function selects the login form and the addItem form. When the logout button is hit, then it clears the session storage,
then hides the addItem form, and displays the login form*/

function logout () {
    let login = document.querySelector('#login');
    let addItem = document.querySelector('#addItem');

    sessionStorage.clear();

    login.setAttribute("style", "display: block");
    addItem.setAttribute("style", "display: none");
};