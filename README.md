### Please download the code from the master branch with the final commit comment being 'X'

### Langaues and frameworks used:

html
Sass converted to CSS
TypeScript and JQuery converted to JavaScript
Bootstrap

### To set up the code:

I am leaving instructions of how I did it however if it does not work or match the video please contact me.
When I say 'run in the terminal' I am talking about the terminal that is in avaialble in VSC pkease use what is the same on what you are using to run the code.

### To compile the typescript:

run 'npm install -g typescript' in the terminal
run 'tsc ./src/ts/greeter.ts' in the terminal

Helpful links:
https://code.visualstudio.com/docs/typescript/typescript-compiling
https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

### To get the JQuery:

run 'npm install jquery' in the terminal
I then created the file src\html\pages\jquery-3.5.1.min.js

Helpful links:
https://www.w3schools.com/jquery/jquery_get_started.asp
https://jquery.com/download/

### To compile the Sass:

I use the 'LIve Sass Compiler' extension by 'Ritwick Dey'
It should do it automatically but you might need to click the 'watching...' at the bottom of the screen.

### To start the server:

run 'npm install --global http-server' in the terminal
run 'http-server' in the terminal
search 'http://127.0.0.1:8080/src/html/pages/sign-up.html' on a browser to bring up the page

Helpful links: https://www.npmjs.com/package/http-server

### Changes to the mock-up:

I have altered the design to make the design of the reuired _ more consistant
I have also moved the lengend of the '_ Required' after the checkboxes so that it apperas after the 'terms and conditions' checkbox where I have also added it.

### Layout of the files and folders:

I have laid out my files in folders in a way that is more saclable for websites for my Sass and TypeScript
eg inside my Sass folder I have sub folders to sort through my Sass (eg color.sass) and then I import them all to main.sass.
The same for the way I tried to link my TypeScript code between three files(WRITE NAMES HERE)
I have not been successful in linking these files correctly so instead I have one Sass and one TypeScript file that are running the code.
I have left the rest there to demonstrate that I have some understanding of how to layout folders

### The files that are being used:

HTML: src\html\pages\sign-up.html
TyeScript and JQuery: src\ts\greeter.ts
The converted JavaScript: src\ts\greeter.js
Where the JQuery is saved: src\html\pages\jquery-3.5.1.min.js
Sass: src\sass\globals\utility\sign-up.sass
The converted CSS: src\sass\globals\utility\sign-up.css

### What the TypeScript will allow you to do on the page:

PLAN I will email Stuart a short video demonstrating these.
If the required fields and not filled in/ ticked when you press the sign up button then an error message will appear under that input.
If the passwords do not match when the sign up button is pressed then an error message will appear under the create password input.
PLAN The sign up button will remain the pale purple until all of the required fields have been filled in.

### To test Accessability, SEO, and Performance

I used the Lighthouse tab which appears when you inspect the code to run a report the scrores are
SEO
Perfeormance
Accessability
x
I also used the WAVE Chrome extension to check the accessability.

### Things I would add if I had more time

Add an alert popup that would appear either when the user tries to close the window and/or when a certain amount of time (eg 10 minute) has passed. Both of these would hopefully keep users more engaged and likley to sign up.

Add an error message if the terms adn conditions chcekbox is not checked when the sign up button is clicked.

Make the sign up button change color to the darker purple when all of the required fields are completed.

Have an explaination of why the required fields are required is the user clicks the \*

Add more code so that the design alters for the different break points so it woudl work on Desktops, tablets, and mobiles.

I would of tested it on more browsers.

### To do

x rewrite classes in BEM
x get rid of all ids that go for sass and just keep for ts
x rename files
reorder files

:focus rework
x input field heights so text fits
resize the page so it matches the design
x make parts bold

make background of input box not be blue if something has been entered
input:-internal-autofill-selected {
appearance: menulist-button;
background-color: rgb(232, 240, 254) !important;
background-image: none !important;
color: -internal-light-dark(black, white) !important;
}
its only if you use the auto fill

spellcheck readme
add in a ts seo if possible
make video
