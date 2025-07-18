// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                text_primary: '#111827',
                primary: '#0f3d3e',
                bgcolor: '#f1f1f1',
            },
        },
    },
    plugins: [],
};
