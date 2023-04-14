function getValues() {
    let val = document.getElementById("inputstr").value.toLowerCase().trim();

    const re = /[a-z]/g;
    let rearr = [...val.matchAll(re)];
    let str = ""
    for (i = 0; i < rearr.length; i++) {
        str += rearr[i][0];
    }

    if (str.length == 0) {
        return;
    }

    let rtarr = checkforPalindrome(str);
    displayResults(rtarr[0],rtarr[1]);
}

function checkforPalindrome(str) {
    let rev = "";
    for (i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    let pal = rev == str ? true : false;

    return [rev,pal];
}

function displayResults(revstr, pal) {
    if (pal) {
        document.getElementById("ahead").textContent =
            "Well done! You entered a Palindrome!";
    } else {
        document.getElementById("ahead").textContent =
            "Sorry. You did NOT enter a Palindrome.";
    }
    document.getElementById("msg").textContent =
        "Your phrase revered is: " + revstr;
    document.getElementById("alert").classList.remove("d-none");
}
