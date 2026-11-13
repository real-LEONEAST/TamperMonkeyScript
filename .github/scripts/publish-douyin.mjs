import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));
const outputDir = process.env.DOUYIN_DIST_DIR || join(repoRoot, "scripts-vite", "抖音优化", "dist");
const repository = process.env.GITHUB_REPOSITORY || "real-LEONEAST/TamperMonkeyScript";
const runNumber = Number(process.env.GITHUB_RUN_NUMBER);

if (!/^[\w.-]+\/[\w.-]+$/.test(repository) || !Number.isSafeInteger(runNumber) || runNumber < 1) {
  throw new Error("Expected a GitHub repository and a positive GITHUB_RUN_NUMBER.");
}

const now = new Date();
const version = [now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate(), runNumber].join(".");
const fileBase = `https://raw.githubusercontent.com/${repository}/release/scripts-vite/${encodeURIComponent("抖音优化")}/dist`;
const updateURL = `${fileBase}/${encodeURIComponent("抖音优化.meta.js")}`;
const downloadURL = `${fileBase}/${encodeURIComponent("抖音优化.user.js")}`;

const artifacts = [
  "抖音优化.user.js",
  "抖音优化.meta.js",
  "抖音优化.min.user.js",
  "抖音优化.min.meta.js",
];

for (const filename of artifacts) {
  const filePath = join(outputDir, filename);
  if (!existsSync(filePath)) throw new Error(`Missing build artifact: ${filename}`);

  const content = readFileSync(filePath, "utf8");
  const endMarker = "// ==/UserScript==";
  const endIndex = content.indexOf(endMarker);
  if (!content.startsWith("// ==UserScript==") || endIndex < 0) {
    throw new Error(`Invalid userscript metadata in ${filename}`);
  }

  const header = content
    .slice(0, endIndex)
    .split(/\r?\n/)
    .filter((line) => !/^\/\/\s*@(updateURL|downloadURL)\s/.test(line));
  while (header.at(-1) === "") header.pop();

  const versionIndex = header.findIndex((line) => /^\/\/\s*@version\s/.test(line));
  if (versionIndex === -1) throw new Error(`Missing @version in ${filename}`);

  header[versionIndex] = `// @version      ${version}`;
  header.splice(versionIndex + 1, 0, `// @updateURL    ${updateURL}`, `// @downloadURL  ${downloadURL}`);

  writeFileSync(filePath, `${header.join("\n")}\n${content.slice(endIndex)}`);
}

console.log(`Published version ${version}`);
console.log(`Install URL: ${downloadURL}`);
