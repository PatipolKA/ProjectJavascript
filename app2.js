var randomNumber = Math.floor(Math.random() * 20) +1;
var input = prompt ("ทายตัวเลขตั้งแต่ 1-5");

if (parseInt(input) === randomNumber) {
    document.write ("คุณทายถูก")
} else {
    document.write ("คุณแแพ้ เลขสุ่มคือ "+randomNumber )
}