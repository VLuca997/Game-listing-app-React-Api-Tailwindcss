# VITE REACT PROJECT:
npm create vite@latest .

npm i

npm run dev

# TAILWINDCSS + POSTCSS:

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

File tailwind.config.js:

    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

File index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;


# START
npm run dev

# React-Icons
npm install react-icons --save



# DARK-MODE by Tailwindcss:
tailwind.config.js
    darkMode: 'class',