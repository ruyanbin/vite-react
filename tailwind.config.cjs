/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from '@iconify/tailwind';
export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {},
  },
    plugins: [
        addDynamicIconSelectors(),
  ],

};
