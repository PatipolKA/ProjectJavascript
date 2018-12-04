function showData() {
    document.write("Javascript"+ "<br>");
}
showData() ;

function addNumber(number1, number2) {
    var result = number1+number2 ;
    document.write("Result = "+ result+ "<br>");
}

addNumber (10, 10);
addNumber (10, 10);
addNumber (10, 10);

function getMessage (msg) {
    return "Hello" +msg+ "<br>"
}
document.write(getMessage("Javascript"));
var msg = getMessage("Java");
document.write(msg);