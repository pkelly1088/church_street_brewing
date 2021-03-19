/*
Name: Patrick Kelly
Course: ICT4510 Advanced Website Design and Management

This function toggles a responsive class when the hamburger menu is clicked. This class styles the list items in the nav bar for mobile
navigation and shows them in a drop down list.
*/

function myFunction() {
    let x = document.querySelector("#add-responsive");
    x.classList.toggle('responsive');
  }