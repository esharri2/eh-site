import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default {
  input: "scripts/main.js",
  output: {
    file: process.env.NODE_ENV ? "_site/main.js" : "_temp/main.js",
    format: "es",
  },
  plugins: [process.env.NODE_ENV === "production" && terser(), nodeResolve()],
};
