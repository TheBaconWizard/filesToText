#!/usr/bin/env node

import fs from 'fs';
import chalk from 'chalk';

const convertDir = (filePath = ".") => {
    const files = fs.readdirSync(filePath);
    files.forEach(file => {
        const fileVal = fs.readFileSync(filePath +"/" + file, 'utf8');
        fs.writeFileSync(filePath +"/" +file + ".txt", fileVal);
    })

}

const args = process.argv.slice(2);
if (args.length > 0) {
    convertDir(args[0]);
} else {convertDir()}

console.log(chalk.blueBright("Files successfully converted!"));
