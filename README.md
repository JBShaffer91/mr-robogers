# Mr. Roboger's Neighborhood

## Introduction
Beep Boop Neighbors is a JavaScript application that generates a sequence of numbers and replaces specific numbers with "Beep!", "Boop!", or "Won't you be my neighbor?" based on certain criteria.

### Features
* Accepts a number as input and generates a sequence of numbers from 0 to the input value
* Replaces numbers that contain 1 with "Beep!", numbers that contain 2 with "Boop!", and numbers that contain 3 with "Won't you be my neighbor?"
* Displays the generated sequence on the page
* Randomly selects and displays a Mr. Rogers gif
* Allows the user to switch between light and dark mode

### How to use
1. Enter a number in the input field
2. Submit the form
3. The generated sequence will be displayed on the page
4. Use the toggle switch to switch between light and dark mode

### Technical details
* The application uses JavaScript for business and UI logic
* The getResultArray function handles the number replacement logic
* The window.onload function handles the form submission and display of the generated sequence and Mr. Rogers gif
* The switchTheme function handles the toggle switch for the light/dark mode

### Tests
The application has 3 tests to ensure the correct generation of the sequence. These tests can be found in the test.js file and can be run by calling the runTests function. The tests check the generated sequence against the expected result.



