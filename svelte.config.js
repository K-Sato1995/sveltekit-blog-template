import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { resolve } from "path";

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  vite: {
    resolve: {
      alias: {
        $data: resolve("./src/data"),
      },
    },
  },
  kit: {
    adapter: adapter(),
    alias: {
      $lib: "src/lib",
      $data: "src/data",
    },
  },
};

export default config;
