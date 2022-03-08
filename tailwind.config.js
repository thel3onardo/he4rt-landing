const colors = require('tailwindcss/colors')
module.exports = {
    purge: {
      enabled: true,
      content:['./*.html']
    },
    // purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                fuchsia: colors.fuchsia,
                cyan: colors.cyan,
                emerald: colors.emerald,
                teal: colors.teal,
                purple: {
                    100: '#F1E9FF',
                    500: '#782BF1',
                },
                gray: {
                    200: '#D1D5DB',
                    500: '#8C8B8E',
                    700: '#4F4F4F',
                    900: '#424141'
                },
                blue: {
                    700: '#1B2333',
                    900: '#111827'
                },
                pink: '#C92BF1'
            },
            container: {
                center: true,
            },
            fontFamily: {
                'spline': ['Spline Sans'],
                'sans': ['Source Sans Pro'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}