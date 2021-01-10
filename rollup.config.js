import { uglify } from "rollup-plugin-uglify";

export default {
  input: "scripts/main.js",
  output: {
    file: process.env.NODE_ENV ? "_site/main.js" : "_temp/main.js",
    format: "es",
  },
  plugins: [process.env.NODE_ENV === "production" && uglify()],
};
