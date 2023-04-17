function getValues() {
    let alertBox = document.getElementById("alert");
    alertBox.classList.remove("alert-danger");
    alertBox.classList.remove("alert-success");
    alertBox.classList.remove("alert-warning");

    let val = document.getElementById("inputstr").value.toLowerCase().trim();

    const re = /[a-z0-9]/g;
    let regarr = [...val.matchAll(re)];
    let str = "";
    let revarr = [];

    for (i = 0; i < regarr.length; i++) {
        str += regarr[i][0];
        revarr.unshift(regarr[i][0]);
    }

    if (str.length == 0) {
        document.getElementById("ahead").textContent = "Error";
        alertBox.classList.add("alert-warning");
        document.getElementById("msg").textContent = "Please enter a word or phrase using letters.";
        return;
    }
    revstr = revarr.join("");

    let pal = checkforPalindrome(str);
    displayResults(revstr,pal);
}

function checkforPalindrome(str) {
    let m = 0;
    let n = str.length-1;
    let pal = true;

    while(m < n){
        if(str[m] != str[n]){
            pal = false;
            break;
        }
        m++;
        n--;
    }

    return pal;
}

function displayResults(revstr, pal) {
    let alertBox = document.getElementById("alert");

    if(pal) {
        document.getElementById("ahead").textContent =
            "Well done! You entered a Palindrome!";
        alertBox.classList.add("alert-success");
    } 
    else {
        document.getElementById("ahead").textContent =
            "Sorry. You did NOT enter a Palindrome.";
        alertBox.classList.add("alert-danger");
    }


    document.getElementById("msg").textContent =
        "Your phrase revered is: " + revstr;
    alertBox.classList.remove("d-none");
}
