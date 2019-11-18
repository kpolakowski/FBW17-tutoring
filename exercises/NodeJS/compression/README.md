## Instructions for students:

### Compress File

Create a program to Compress Files. The program should compress a any file into a gzip archive and notify the user of success.

-   Create a file `index.js`
-   Use `createReadStream`, `pipe` and the [`zlib`](https://www.npmjs.com/package/zlib) library. Research how you can compress a file using this library.
-   In this directory you find a file `input.txt` that should be compressed by your program into `input.txt.gz` by default (if not file path has been provided).

```bash
$ node index
File Compressed.
```

-   After you have executed `index.js` you should be able to see in your current folder the new compressed file `input.txt.gz`.

-   The program should also be able to compress files from other folders if you pass a path as an argument. For example:

```bash
$ node index ../Node-FindWord/data.txt
File Compressed.
```
-   After you have executed the program that way you should be able to see in the `Node-FindWord` folder the new compressed file `data.txt.gz`.

### Rules

-   Deadline: 2 hours.
