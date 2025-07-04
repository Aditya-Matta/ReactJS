# Tailwind Install 3.4.17

npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss@3.4.17
npx tailwindcss init -p

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

@tailwind base;
@tailwind components;
@tailwind utilities;