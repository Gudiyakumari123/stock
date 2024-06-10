/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4361ee',
                    light: '#eaf1ff',
                    'dark-light': 'rgba(67,97,238,.15)',
                },
                secondary: {
                    DEFAULT: '#805dca',
                    light: '#ebe4f7',
                    'dark-light': 'rgb(128 93 202 / 15%)',
                },
                success: {
                    DEFAULT: '#00ab55',
                    light: '#ddf5f0',
                    'dark-light': 'rgba(0,171,85,.15)',
                },
                danger: {
                    DEFAULT: '#e7515a',
                    light: '#fff5f5',
                    'dark-light': 'rgba(231,81,90,.15)',
                },
                warning: {
                    DEFAULT: '#e2a03f',
                    light: '#fff9ed',
                    'dark-light': 'rgba(226,160,63,.15)',
                },
                info: {
                    DEFAULT: '#2196f3',
                    light: '#e7f7ff',
                    'dark-light': 'rgba(33,150,243,.15)',
                },
                dark: {
                    DEFAULT: '#3b3f5c',
                    light: '#eaeaec',
                    'dark-light': 'rgba(59,63,92,.15)',
                },
                black: {
                    DEFAULT: '#0e1726',
                    light: '#e3e4eb',
                    'dark-light': 'rgba(14,23,38,.15)',
                },
                white: {
                    DEFAULT: '#ffffff',
                    light: '#e0e6ed',
                    dark: '#888ea8',
                },
            },
            animation: {
                'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
            },
            keyframes: {
                'text-slide-2': {
                    '0%, 40%': {
                        transform: 'translateY(0%)',
                    },
                    '50%, 90%': {
                        transform: 'translateY(-33.33%)',
                    },
                    '100%': {
                        transform: 'translateY(-66.66%)',
                    },
                },
                'text-slide-3': {
                    '0%, 26.66%': {
                        transform: 'translateY(0%)',
                    },
                    '33.33%, 60%': {
                        transform: 'translateY(-25%)',
                    },
                    '66.66%, 93.33%': {
                        transform: 'translateY(-50%)',
                    },
                    '100%': {
                        transform: 'translateY(-75%)',
                    },
                },
                'text-slide-4': {
                    '0%, 20%': {
                        transform: 'translateY(0%)',
                    },
                    '25%, 45%': {
                        transform: 'translateY(-20%)',
                    },
                    '50%, 70%': {
                        transform: 'translateY(-40%)',
                    },
                    '75%, 95%': {
                        transform: 'translateY(-60%)',
                    },                            
                    '100%': {
                        transform: 'translateY(-80%)',
                    },
                },
                'text-slide-5': {
                    '0%, 16%': {
                        transform: 'translateY(0%)',
                    },
                    '20%, 36%': {
                        transform: 'translateY(-16.66%)',
                    },
                    '40%, 56%': {
                        transform: 'translateY(-33.33%)',
                    },
                    '60%, 76%': {
                        transform: 'translateY(-50%)',
                    },
                    '80%, 96%': {
                        transform: 'translateY(-66.66%)',
                    },
                    '100%': {
                        transform: 'translateY(-83.33%)',
                    },
                },
                'text-slide-6': {
                    '0%, 13.33%': {
                        transform: 'translateY(0%)',
                    },
                    '16.66%, 30%': {
                        transform: 'translateY(-14.28%)',
                    },
                    '33.33%, 46.66%': {
                        transform: 'translateY(-28.57%)',
                    },
                    '50%, 63.33%': {
                        transform: 'translateY(-42.85%)',
                    },
                    '66.66%, 80%': {
                        transform: 'translateY(-57.14%)',
                    },
                    '83.33%, 96.66%': {
                        transform: 'translateY(-71.42%)',
                    },
                    '100%': {
                        transform: 'translateY(-85.71%)',
                    },
                },
                'text-slide-7': {
                    '0%, 11.43%': {
                        transform: 'translateY(0%)',
                    },
                    '14.28%, 25.71%': {
                        transform: 'translateY(-12.5%)',
                    },
                    '28.57%, 40%': {
                        transform: 'translateY(-25%)',
                    },
                    '42.85%, 54.28%': {
                        transform: 'translateY(-37.5%)',
                    },
                    '57.14%, 68.57%': {
                        transform: 'translateY(-50%)',
                    },
                    '71.42%, 82.85%': {
                        transform: 'translateY(-62.5%)',
                    },
                    '85.71%, 97.14%': {
                        transform: 'translateY(-75%)',
                    },
                    '100%': {
                        transform: 'translateY(-87.5%)',
                    },
                },
                'text-slide-8': {
                    '0%, 10%': {
                        transform: 'translateY(0%)',
                    },
                    '12.5%, 22.5%': {
                        transform: 'translateY(-11.11%)',
                    },
                    '25%, 35%': {
                        transform: 'translateY(-22.22%)',
                    },
                    '37.5%, 47.5%': {
                        transform: 'translateY(-33.33%)',
                    },
                    '50%, 60%': {
                        transform: 'translateY(-44.44%)',
                    },
                    '62.5%, 72.5%': {
                        transform: 'translateY(-55.55%)',
                    },
                    '75%, 85%': {
                        transform: 'translateY(-66.66%)',
                    },
                    '87.5%, 97.5%': {
                        transform: 'translateY(-77.77%)',
                    },
                    '100%': {
                        transform: 'translateY(-88.88%)',
                    },
                }
            },
      
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
            },
            spacing: {
                4.5: '18px',
            },
            boxShadow: {
                '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-invert-headings': theme('colors.white.dark'),
                        '--tw-prose-invert-links': theme('colors.white.dark'),
                        h1: { fontSize: '40px', marginBottom: '0.5rem', marginTop: 0 },
                        h2: { fontSize: '32px', marginBottom: '0.5rem', marginTop: 0 },
                        h3: { fontSize: '28px', marginBottom: '0.5rem', marginTop: 0 },
                        h4: { fontSize: '24px', marginBottom: '0.5rem', marginTop: 0 },
                        h5: { fontSize: '20px', marginBottom: '0.5rem', marginTop: 0 },
                        h6: { fontSize: '16px', marginBottom: '0.5rem', marginTop: 0 },
                        p: { marginBottom: '0.5rem' },
                        li: { margin: 0 },
                        img: { margin: 0 },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('@tailwindcss/typography'),
        rotateX,
    ],
};
