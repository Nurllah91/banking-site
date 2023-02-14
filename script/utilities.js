function getValueFromInputId(inputId){
    const inputValue = document.getElementById(inputId);
    const inputTextString = inputValue.value;
    

    return inputTextString;
}
// get number form input value function
function getNumberValueFromInput(inputFieldId){
    const inputValue = document.getElementById(inputFieldId);
    const inputValueString = inputValue.value;
    inputValue.value = '';
    const inputNumber = parseFloat(inputValueString);
    return inputNumber;
}



// getting number form text function
function getNumberFromText(textId){
    const textValue = document.getElementById(textId);
    const textValueString = textValue.innerText;
    const textNumberValue = parseFloat(textValueString);

    return textNumberValue;
}





// set value function 
function setValue(previousValueId, newValue){
    document.getElementById(previousValueId).innerText = newValue;
}