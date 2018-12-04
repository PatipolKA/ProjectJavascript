var userName = prompt ("Who are you");
if (userName === "admin") {
    document.write("<p>You are admin</p>")
}   else if (userName === "user"){
    document.write("<p>You are User</p>")
}   else {
    document.write("<p>You are</p>")
    document.write(userName)
}