/** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./app/**/*.{js,ts,jsx,tsx}",
//         "./components/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }


//export tailwind config from packages module

const sharedConfig = require("tailwind-config/tailwind.config.js")

module.exports = {
    ...sharedConfig,
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    ]
}