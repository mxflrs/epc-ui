/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1200px',
        xl: '1440px',
      },
    },
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
          w2: '#FFFFFF25',
          o0: '#F5F5F4',
          o1: '#EBE8E2'
        },

      }
    },
  },
  plugins: [],
}

