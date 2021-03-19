/*
Name: Patrick Kelly
Course: ICT4510 Advanced Website Design and Management

This code runs a GET fetch that returns all the items from the database, it then places them in rows in the table and adds classes*/

function menuList () {

    //The next two lines are the api_key and url for the GET request. The api_key had to hard coded because it could not be retrieved
    //by session storage unless someone logs in
    let apiKey = 'a3a96fdfdfc2d5bfc33c6d6b6e544fcd';
    let url = 'https://ict4510.herokuapp.com/api/menus?api_key=' + apiKey;

    //This is the fetch request
    fetch(url) 
        .then(function(response) {
            if(response.status === 200){ //This checks for a positive response from the server and then returns the data
                console.log(response.status);
                let res = response.json();
                return res
            } else {
                console.log('Error: reload page')
            }
        }).then(function(res) { //This takes the data and then selects the table and inserts the data in a row in the table
            let menuList = document.querySelector("#menuList");
            console.log(res.menu);

            //This runs a loop on the data returned from the database and inserts it in a data cell and in a row for each object returned
            res.menu.forEach(function(value) {

                let menuRow = menuList.insertRow(0);
                let itemCell = menuRow.insertCell(0);
                let itemDesc = menuRow.insertCell(1);
                let itemPrice = menuRow.insertCell(2);

                itemCell.innerHTML = value.item;
                itemDesc.innerHTML = value.description;
                itemPrice.innerHTML = value.price;

                menuRow.classList.add('row');
                itemCell.classList.add('columns-3');
                itemCell.classList.add('item');
                itemDesc.classList.add('columns-6');
                itemPrice.classList.add('columns-3');
                itemPrice.classList.add('price');

            });
        }).catch(function(error){ //This is just the catch error incase something goes wrong and logs the error to the console.
            console.log('You have an error ' + error);
        });
};

menuList(); //This the function call to run the code

