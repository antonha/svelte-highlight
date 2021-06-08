
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
let config = {
  kit: {
    adapter: node(),
    target: "#svelte",
  },
};

export default config;
