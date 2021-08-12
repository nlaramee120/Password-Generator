# 03 JavaScript: Password Generator

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

![Screenshot] - Assets\screencapture-file-C-Users-nlara-nlaramee-3-Homework-Password-Generator-Develop-index-html-2021-08-12-12_25_01.png
linked to deployment - https://nlaramee120.github.io/Password-Generator/


Javascript

The Javascript was lacking many crucial elements in order for the page to properly generate a password. There are probably many ways to go about coding this, however the way I chose was by
creating variables for each of the criteria that the user would choose from creating the password. This would include characters and letters, and if the user wants the letters to be uppercase
or lowercase. I then created the enter variable which created a prompt, asking the user to select the length of their password from 8-128 characters. If the criteria was not met, the user is informed to enter a valid number. After choosing a length the user is prompted with the characters, letters, uppercase, and lowercase, prompts which confirm if the user would like them
included in the password. If one of the prompts are confirmed by the user, the variables for those are included in the loop below. If none of the prompts are confirmed, the user is informed that they need to choose at least one of the criteria.

After the criteria is created by the user. A loop is created for as many times as characters that the user wants in their password. Then, 4 more variables were created the are used to determine if that letter type or character has already been used in the loop. These are used in order to make sure that at least one of each of the criteria selected by the user is included in the password. The allAllowed variable is used for the the remaining characters in the password, and are filled up randomly by the criteria that was selected by the user. A list of characters was used for selection, and CharCode was used to change numbers into lowercase or capital letters.

