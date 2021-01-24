import { terser } from "rollup-plugin-terser";

export default {
  input: "scripts/main.js",
  output: {
    file: process.env.NODE_ENV ? "_site/main.js" : "_temp/main.js",
    format: "es",
  },
  plugins: [process.env.NODE_ENV === "production" && terser()],
};
