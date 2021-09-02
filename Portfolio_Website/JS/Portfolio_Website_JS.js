function validate() {
    let a = document.forms["form"]["name"].value;
    let b = document.forms["form"]["phone"].value;
    let c = document.forms["form"]["email"].value;
    let d = document.forms["form"]["message"].value;
    if(a == "" && b == "" && c == "" && d == "") {
        window.alert("Please fill out the required fields...");
    }
}