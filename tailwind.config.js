// tailwind.config.js
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './resources/**/*.js',
        './resources/**/*.ts',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#2a1f5c',           // fallback bg layer (rarely used)
                    purple: '#7C3AED',       // primary accent
                    purpleSoft: '#A78BFA',
                    cyan: '#22D3EE',
                    lime: '#A3E635',
                    orange: '#FB923C',
                    red: '#F87171',
                    surface: '#0E0E12',      // darkest
                    surface2: '#14141B',     // card bg
                    outline: '#262636',
                    text: '#EAEAF2',
                    muted: '#9EA0AD',
                },
            },
            borderRadius: {
                xl2: '1.25rem',
            },
            boxShadow: {
                'glass': '0 10px 30px rgba(0,0,0,.35)',
                'glow': '0 0 0 3px rgba(124,58,237,.18)',
            },
            backdropBlur: {
                12: '12px',
            },
        },
    },
    plugins: [],
}
