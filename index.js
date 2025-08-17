
import {createRequire} from "module"
const require = createRequire(import.meta.url)

const {say}=require("cowsay")

import chalk from 'chalk';

const text = process.argv[2].toUpperCase();
console.log(say({
    text: `${chalk.bgGreen(text)}`,
    e: "oO",
    T: "U ",
  }));
