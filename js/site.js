function checkPalindrome() {
    let val = document.getElementById("inputstr").value;
    str = val.toLowerCase().trim();

    if (str.length == 0) {
        return;
    }

    let pal = true;
    let m = 0;
    let n = str.length-1

    while(m < n){
        if(str[m] != str[n])
        {
            pal = false;
            break;
        }
        m++;
        while(str[m] == ' '){m++;}
        n--;
        while(str[n] == ' '){n--;}
    }

    if(pal){
        Swal.fire(
            {
                backdrop: false,
                title: 'APP NAME',
                text: str + " is a palindrome!"
            }
        );
    }
    else{
        Swal.fire(
            {
            backdrop: false,
            title: "APP NAME",
            text: str + " is NOT a palindrome.",
        });
    }
}
