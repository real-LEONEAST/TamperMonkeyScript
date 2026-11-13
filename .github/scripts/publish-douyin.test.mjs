import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const script = fileURLToPath(new URL("./publish-douyin.mjs", import.meta.url));
const files = ["抖音优化.user.js", "抖音优化.meta.js", "抖音优化.min.user.js", "抖音优化.min.meta.js"];

test("publishes matching metadata and preserves script bodies", () => {
  const dir = mkdtempSync(join(tmpdir(), "douyin-release-test-"));
  try {
    for (const filename of files) {
      const source = [
        "// ==UserScript==",
        "// @name         抖音优化",
        "// @version      2026.11.6",
        "// ==/UserScript==",
        `const artifact = ${JSON.stringify(filename)};`,
      ].join("\n");
      writeFileSync(join(dir, filename), source);
    }

    const env = {
      ...process.env,
      DOUYIN_DIST_DIR: dir,
      GITHUB_REPOSITORY: "real-LEONEAST/TamperMonkeyScript",
      GITHUB_RUN_NUMBER: "42",
    };
    for (let i = 0; i < 2; i++) {
      const result = spawnSync(process.execPath, [script], { env, encoding: "utf8" });
      assert.equal(result.status, 0, result.stderr);
    }

    for (const filename of files) {
      const output = readFileSync(join(dir, filename), "utf8");
      assert.match(output, /^\/\/ @version\s+\d{4}\.\d{1,2}\.\d{1,2}\.42$/m);
      assert.match(output, /^\/\/ @updateURL\s+https:\/\/raw\.githubusercontent\.com\/real-LEONEAST\/TamperMonkeyScript\/release\//m);
      assert.match(output, /^\/\/ @downloadURL\s+https:\/\/raw\.githubusercontent\.com\/real-LEONEAST\/TamperMonkeyScript\/release\//m);
      assert.equal((output.match(/\/\/ @updateURL/g) || []).length, 1);
      assert.equal((output.match(/\/\/ @downloadURL/g) || []).length, 1);
      assert.ok(output.endsWith(`const artifact = ${JSON.stringify(filename)};`));
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
