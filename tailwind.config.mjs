/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                burgundy: {
                    DEFAULT: '#4a0404',
                    dark: '#2d0202',
                    light: '#6b0606',
                },
                crimson: {
                    DEFAULT: '#8B0000',
                    dark: '#5c0000',
                    light: '#a52a2a',
                },
                stone: {
                    DEFAULT: '#1a1a1a',
                    warm: '#2a2a2a',
                    dark: '#0f0f0f',
                },
                black: {
                    DEFAULT: '#000000',
                    rich: '#0a0a0a',
                    soft: '#121212',
                },
                cream: {
                    DEFAULT: '#f5f5f7',
                    muted: '#e5e5e7',
                    warm: '#faf8f5',
                },
            },
            fontFamily: {
                serif: ['EB Garamond', 'Georgia', 'Times New Roman', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                // Tipografía responsive más grande
                'display': ['clamp(4rem, 15vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.03em' }],
                'headline': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'title': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
                'body-lg': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.6' }],
                'body': ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.7' }],
            },
            spacing: {
                'section': 'clamp(4rem, 15vh, 10rem)',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};
