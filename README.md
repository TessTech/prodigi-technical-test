### Please download the code from the master branch

### Languages and frameworks used:

HTML

Sass converted to CSS

TypeScript and JQuery converted to JavaScript

Bootstrap

### To set up the code:

I am leaving instructions of how I did it if it does not do it automatically. However if it does not work or match the video please contact me.

When I say 'run in the terminal' I am talking about the terminal that is in available in VSC please use what is the same on what you are using to run the code.

### To compile the typescript:

run 'npm install -g typescript' in the terminal.

run 'tsc ./src/ts/components/sign-up.ts’ in the terminal.

Helpful links:

https://code.visualstudio.com/docs/typescript/typescript-compiling

https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

### To get the JQuery:

run 'npm install jquery' in the terminal.

I then created the file src\jquery\jquery-3.5.1.min.js

Helpful links:

https://www.w3schools.com/jquery/jquery_get_started.asp

https://jquery.com/download/

### To compile the Sass:

I use the 'Live Sass Compiler' extension by 'Ritwick Dey'

### To start the server:

run 'npm install --global http-server' in the terminal.

run 'http-server' in the terminal.

search 'http://127.0.0.1:8080/src/html/pages/sign-up.html' on a browser to bring up the page

Helpful links: https://www.npmjs.com/package/http-server

### Changes to the mock-up:

I have altered the design to make the design of the required \* more consistent

I have also moved the '\* Required' after the checkboxes so that it appears after the 'terms and conditions' checkbox where I have also added it.

### Layout of the files and folders:

At work we use a command to compile the code from the src folder into the dist for it to work.

I do not know that command so I have manually put some of the files into the dist folder.

I would normally write the code in the src folder.

### The main files that are being used:

HTML: dist/html/pages/sign-up.html

TyeScript and JQuery: src/ts/components/sign-up.ts

The converted JavaScript: src/ts/components/sign-up.js

Where the JQuery is saved: src/jquery/jquery-3.5.1.min.js

Sass: src/sass/main.sass

The converted CSS: src/sass/main.css

### What the TypeScript will allow you to do on the page:

If the required fields and not filled in/ ticked when you press the sign up button then an error message will appear under that input.

If the passwords do not match when the sign up button is pressed then an error message will appear under the create password input.

An alert pop up will appear if the user has been on the page for ten minutes.

### To test Accessibility, SEO, and Performance

I used the Lighthouse tab which appears when you inspect the code for SEO, Performance, and Accessibility.

I also used the WAVE Chrome extension to check the accessibility.
