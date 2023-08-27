/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./rsautoglas/templates/*.{html,js}",
            "./rsautoglas/templates/pages/*.{html,js}",
            "./rsautoglas/templates/pages/cms/*.{html,js}",
            "./rsautoglas/templates/pages/cms/galery/*.{html,js}",
            "./rsautoglas/templates/designs/*.{html,js}",
            "./rsautoglas/templates/blog/*.{html,js}",
            "./rsautoglas/templates/registration/*.{html,js}",
            "./rsautoglas/templates/pages/cms/content/*.{html,js}",
            "./rsautoglas/templates/pages/cms/content/sites/*.{html,js}",
            "./rsautoglas/templates/pages/cms/content/sites/**/*.{html,js}",
            "./rsautoglas/templates/pages/cms/blog/*.{html,js}",
            "./rsautoglas/static/js/cms/**/*.js",
            ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      variants: {
        scale: ["responsive", "hover", "focus", "group-hover"],
        textColor: ["responsive", "hover", "focus", "group-hover"],
        opacity: ["responsive", "hover", "focus", "group-hover"],
        backgroundColor: ["responsive", "hover", "focus", "group-hover"],
      },
      boxShadow: {
        outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
      },
      height: {
        129: "400px",
        130: "590px",
        131: "590px",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        }
      },
      animation: {
        "fade-in-down": "fade-in-down 1.2s ease-out",
      }
    },
  },
  plugins: [],
};