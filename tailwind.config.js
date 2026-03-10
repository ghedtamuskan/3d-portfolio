/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                snow: "snow 18s linear infinite",
            },
            keyframes: {
                snow: {
                    from: { backgroundPosition: "0 -200px" },
                    to: { backgroundPosition: "0 800px" },
                },
            },
        },
    },

    plugins: [],

};









