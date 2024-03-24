/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        epc: {
          r0: '#FF5E59',
          r1: '#FF4545',
          r2: '#DE3B3B',
          d0: '#212121',
          d1: '#21212150',
          d2: '#21212125',
          w0: '#FFFFFF',
          w1: '#FFFFFF50',
          w2: '#FFFFFF25'
        },

      }
    },
  },
  plugins: [],
}

