import { mkdir, writeFile } from "fs/promises";
import { rimraf } from "rimraf";

const Director = "./Director";
const Fisier = `${Director}/fisier.txt`;

await mkdir(Director, {recursive: true});
await writeFile(Fisier, "Hello World!");
await rimraf(Director);