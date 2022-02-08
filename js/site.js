// Get the String from the page
// Controller Function
function getString(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    // check to make sure user entered in a phrase
    if(userString){

        // check for palindrome
        let returnObj = isPalindrome(userString);

        // display message to the screen
        display(returnObj);

    } else{
        
        alert("You must enter a phrase");
    }


}

// Reverse the String
// Logic Function
function isPalindrome(userString){

    userString = userString.toLowerCase();

    // remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "")

    let revString = [];

    let returnObj = {
        msg: "",
        reversed: ""
    };

    for (let index = userString.length - 1; index >= 0; index--) {

        revString += userString[index];
    }

    returnObj.reversed = revString;

    if (revString == userString){
        returnObj.msg = "Well done! You entered a Palindrome!";
    } else {
        returnObj.msg = "Sorry! You did not enter a Palindrome!";
    }

    

    return returnObj
}

// Display the Reversed String
// View Function
function display(returnObj){

    document.getElementById("alertHeading").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: <strong>${returnObj.reversed}</strong>`;

    // Show the alert box
    document.getElementById("alert").classList.remove("invisible");

}

function clear(){

    document.getElementById("userString").value = "";
    document.getElementById("alert").classList.add("invisible");
}
