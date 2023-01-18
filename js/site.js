// Logic Function
// Reverse a string
function reverseAString(userString) {
    // Reverse the string
    let revString = '';

    for (i = userString.length - 1; i >= 0; i--) {

        revString += userString[i];

    }

    return revString;

}

// Entry Point aka controller
function getValues() {

    let inputString = document.getElementById('userString').value;

    let reversedString = reverseAString(inputString);

    displayString(reversedString);



}




function reverseAStringJS(userString) {
    let reversed = userString.split('').reverse().join('');
    // let userStringArray = userString.split(''); //'hello' => [h,e,l,l,o]
    // let reversedArray = userStringArray.reverse(); // [h,e,l,l,o] => [o, l, l, e, h]
}


// view function
function displayString(revString) {

    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');

}