function validateFrom() {
    let x = document.forms["myfrom"] ["fname"].value;
    if (x==" ")
    {
        alert("Name must be filled out")
        return false
    }
}