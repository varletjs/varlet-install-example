import { presetVarlet } from '@varlet/preset-tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [presetVarlet()]
};
