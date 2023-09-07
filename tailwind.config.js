/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
  
    buttons: {
      'button1':'bg-emerald-500',
    },
    extend: {
      backgroundImage:{
        'finkel': "url('/img/rfinkel.jpg')",
        'osher': "url('/img/osher-edited.jpg')",
        'ouzzan': "url('/img/ouzzan-edited.jpg')",
        'buch': "url('/img/buch.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

