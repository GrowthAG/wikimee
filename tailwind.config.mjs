/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Branding OFICIAL Wikimee (conforme LP_DESIGN_SPECS.md)
                'wikimee': {
                    DEFAULT: '#4F46E5',    // Primary - CTA principal
                    hover: '#4338CA',       // Primary hover
                    light: '#818CF8'        // Accent claro para destaques
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
