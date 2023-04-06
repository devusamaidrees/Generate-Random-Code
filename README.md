# Password Generator
This is a simple password generator built using JavaScript. It generates a random password of specified length based on the options selected by the user.

# Getting Started
To get started with the password generator, you need to:  

**1.** Download or clone the repository

**2.** Open the **index.html** file in your browser

**3.** Use the password generator by selecting the options and clicking on the "**Generate Password**" button.
# How to Use
The password generator allows you to generate a random password based on the following options:

1. **Length** - specify the length of the password (between 4 and 20 characters)
2. **Uppercase characters** - include uppercase characters in the password
3. **Lowercase characters** - include lowercase characters in the password
4. **Numbers** - include numbers in the password
5. **Special characters** - include special characters (such as !@#$%^&*()~) in the password

Once you have selected the options, click on the "**Generate Password**" button to generate a random password.

You can also copy the generated password to your clipboard by clicking on the "**Copy to Clipboard**" button.

# Code Explanation
The code is written in JavaScript and consists of a single class password. The class has a constructor function that initializes the password to an empty string.

The generatepassword method generates a random password based on the options selected by the user. It uses the **Math.random()** function to generate random characters from the specified character sets (uppercase, lowercase, numbers, and special characters).

The method also performs input validation to ensure that the password length is between 4 and 20 characters and that at least one option is selected. If the input is invalid, the method displays an alert message and breaks out of the loop.

The generated password is then returned by the method.

The code also includes an event listener that listens for clicks on the "**Generate Password**" button. When the button is clicked, it gets the password length input from the user and calls the generatepassword method to generate a password. The generated password is then displayed in the output text area.

The execCopy function is used to copy the generated password to the clipboard when the "**Copy to Clipboard**" button is clicked. It selects the generated password and executes the document.execCommand("copy") function to copy the password to the clipboard.
