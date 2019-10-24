## Instructions for students:

### Formatting CLI

Create a program that formats and sanitizes strings.

-   Make sure the function is called in an `index.js` file.

Example of your end result:

```bash
$ node index.js "mIAmi   Vice"
Miami Vice
```

Steps to create your program:

-   Create a Formatting function in `formatting.js`. This function should:
    a) Trim whitespace from the beginning and end of the parameter.
    b) Collapse spaces (ensure only one space appears at a time, no doubles)

    Example output:

    -   ' sao tome' => 'sao tome'
    -   'kuala lumpur ' => 'kuala lumpur'

-   In `messaging.js` write a new function called `showHelp`.

    -   The function should fire if the term `--help` appears anywhere in the argument list.

    Here is an example:

    ```bash
    $ node index.js "mIAmi   Vice" --help
    How to use this program:
        1. When you input a new string with more than 1 space the program will sanitize it.
        2. If you typed the name of a city without capitalization the program will capitalize it.
        3. If you included a Capitalized letter inside the wrong place of your string the program will sanitize it.
    Miami Vice
    ```

-   also in `formatting.js` write a new function called `capitalizeInitial`. This function should take a string as a parameter, and return it with only the first letter capitalized.

    Example output:

    -   'europe' => 'Europe'
    -   'BERLIN' => 'Berlin'
    -   'aSIa' => 'Asia'

**Bonuses**

-   Your program should be able to remove symbols.

### Rules

-   This is an individual assignment.
-   Deadline: 30 minutes.
-   Use **Git properly**
