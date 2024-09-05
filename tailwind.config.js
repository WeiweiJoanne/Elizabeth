/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/*.liquid", "./sections/*.liquid", "./snippets/*.liquid", "./templates/customers/*.liquid", "./templates/*.liquid"],
  theme: {
    extend: {
      translate: {
        4.25: "17rem",
      },
      colors: {
        "transparent-gray": {
          light: "rgba(200, 200, 200, 0.3)",
          DEFAULT: "rgba(128, 128, 128, 0.5)",
          dark: "rgba(64, 64, 64, 0.7)",
        },
        "my-orange": {
          light: "#f2efdd",
          DEFAULT: "#c97040",
          dark: "#e97132",
        },
      },
      width: {
        "16px": "16px",
      },
      height: {
        94: "22rem",
      },
      borderWidth: {
        '24':'24px'
      },
    },
  },
  plugins: [],
};

