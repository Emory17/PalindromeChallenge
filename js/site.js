function getValues() {
    let val = document.getElementById("inputstr").value.toLowerCase().trim();

    const re = /[a-z]/g;
    let regarr = [...val.matchAll(re)];
    let str = "";
    let revarr = [];

    for (i = 0; i < regarr.length; i++) {
        str += regarr[i][0];
        revarr.unshift(regarr[i][0]);
    }

    if (str.length == 0) {
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
    if(pal) {
        document.getElementById("ahead").textContent =
            "Well done! You entered a Palindrome!";
            document.getElementById("alert").classList.remove("alert-danger");
            document.getElementById("alert").classList.add("alert-success");
    } 
    else {
        document.getElementById("ahead").textContent =
            "Sorry. You did NOT enter a Palindrome.";
            document.getElementById("alert").classList.remove("alert-success");
            document.getElementById("alert").classList.add("alert-danger");
    }
    document.getElementById("msg").textContent =
        "Your phrase revered is: " + revstr;
    document.getElementById("alert").classList.remove("d-none");
}
