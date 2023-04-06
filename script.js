class password {
    constructor() {
        console.log("Welcome to password generator")
        this.pass = ""
    }
    generatepasswors(len) {

        let upper_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let lower_chars = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "0123456789"
        let specials = "!@#$%^&*()~"
        let i = 0
        while (i < len) {
            if (len < 4) {
                alert("Your password is atleast of 4 characters")
                break
            }
            if (len > 20) {
                alert("Your password should not be greater than 20 characters")
                break
            }
            else {
                let upperchar = document.querySelector("#upper_char")
                if (upperchar.checked == true) {
                    this.pass += upper_chars[Math.floor(Math.random() * upper_chars.length)]
                    i++
                }
                let lowerchar = document.querySelector("#lower_char")
                if (lowerchar.checked == true) {
                    this.pass += lower_chars[Math.floor(Math.random() * lower_chars.length)]
                    i++
                }
                let num_check = document.querySelector("#num")
                if (num_check.checked == true) {
                    this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                    i++
                }
                let specials_check = document.querySelector("#special_char")
                if (specials_check.checked == true) {
                    this.pass += specials[Math.floor(Math.random() * specials.length)]
                    i++
                }
                if (i == 0) {
                    alert("You have to tick atleast one box")
                    break
                }
            }
        }
        this.pass = this.pass.substring(0, len)
        return this.pass
    }
}
let p = new password()
btn.addEventListener("click", () => {
    let len = document.querySelector("#password").value
    console.log(len)
    document.querySelector("#text").value = p.generatepasswors(len)
    len = ""
    document.querySelector("#password").value = len
    p.pass = ""
})
document.getElementById('Copy').addEventListener('click', execCopy);
function execCopy() {
    document.querySelector("#text").select();
    document.execCommand("copy");
}