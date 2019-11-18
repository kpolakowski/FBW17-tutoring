const http = require("http");
const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();

const args = process.argv.slice(2);
const path = args[0] || "input.txt";
const output = args[1];

function compress(inputFile, outputFile = inputFile.concat(".gz")){
    if(fs.existsSync(inputFile)){
        const inp = fs.createReadStream(inputFile);
        const out = fs.createWriteStream(outputFile);

        inp.pipe(gzip)
            .on("error", err => console.log(error))
            .pipe(out)
            .on("error", err => console.log(error));

    } else {
        console.log("Input file doesn't exist.")
    }
}

compress(path,output)


