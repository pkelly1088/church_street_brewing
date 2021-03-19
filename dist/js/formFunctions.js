/*
Name: Patrick Kelly
Course: ICT4510 Advanced Website Design and Management

USER LOGIN

This is the function for logging a user into the dashboard */
function login () {

    //These next 5 lines save teh values from that were entered from the form, select the form, selects the login section, and selects the dashboard section
    let username = document.querySelector('#usernameInput').value;
    let password = document.querySelector('#passwordInput').value;
    let loginForm = document.querySelector('#loginForm');
    let login = document.querySelector('#login');
    let addItem = document.querySelector('#addItem');

    //This puts the values that were retrieved from the form into an object
    const userLogin = {
        username: username,
        password: password
    };

    //This is the fetch request that sends the user login data to the server for verification
    function runFetch () {

        //These next two lines are the url for where the fetch is sent and the headers for the fetch request
        let url = 'https://ict4510.herokuapp.com/api/login';
        let headers = { 
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(userLogin)  //this is the data put in JSON string to be sent to the server
          };

          //This is the fetch request for the login
          fetch(url, headers)
          .then(function (response) {
                if (response.status === 200) { //this is verifying that it was a positive response from the server
                    let res = response.json() //This parses the response from the server
                    loginForm.reset();  //This resets the login form
                    login.setAttribute("style", "display: none");  //This hides the login form
                    addItem.setAttribute("style", "display: block"); //This displays the dashboard
                    
                    return res
                } else {
                    console.log('Error: try login again')
                    loginForm.rest();
                }
          })
          .then(function (res) {

                //The next three lines save information from the successful login to session storage for use later
                sessionStorage.setItem('api_key', JSON.stringify(res.user.api_key));
                sessionStorage.setItem('token', JSON.stringify(res.user.token));
                sessionStorage.setItem('person', JSON.stringify(res));

                // console.log(sessionStorage.getItem('api_key'));
                // console.log(sessionStorage.getItem('token'));
          })
          .catch(function(error) {
            console.log('Request failed', error);
        });

    };
    runFetch();
};

//MENU SUBMIT
// This function takes information from the dashboard form and sends it to the server to be saved for later
function itemSubmit () {

    //The first 3 lines save the save the data from the form, the next line selects the menu form
    let item = document.querySelector('#itemInput').value;
    let description = document.querySelector('#descriptionInput').value;
    let price = document.querySelector('#priceInput').value;
    let menuForm = document.querySelector('#menuForm');

    //This object takes the values from the form and saves them to an object
    let newMenuItem = {
        item: item,
        description: description,
        price: price
    };

    //The next two lines turn the JSON string into an object
    let userApi = JSON.parse(sessionStorage.getItem('api_key'));
    let userToken = JSON.parse(sessionStorage.getItem('token'));

    //The next function saves the inputs for the fetch and runs the fetch request
    function runMenuSubmit () {
        // console.log(newMenuItem);
        // console.log(userApi);
        // console.log(userToken);

        //The next two lines save the url of where to send the fetch request and the headers for the request
        let menuUrl = 'https://ict4510.herokuapp.com/api/menus?api_key=' + userApi;
        let menuHeaders = {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "x-access-token": userToken
            },
            body: JSON.stringify(newMenuItem)
        }

        //Below is the fetch request for retrieving the data for the menu items that were saved to the database
        fetch(menuUrl, menuHeaders)
            .then(function(response){
                if (response.status === 201) { //This checks for a positive response from the server and then saves the info to a parses the response and resets the form
                    console.log(response);
                    let res = response.json();
                    menuForm.reset();

                    return res
                } else {
                    console.log('Error: item not added to database. Please try again.')
                };
            }).then(function(res){
                console.log(res);
            }).catch(function(error){
                console.log(error);
            })
    }

    runMenuSubmit(); //This runs the form fetch

}