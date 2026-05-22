import withBase from "./tailwind.base";

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#D9F6FF",
          100: "#ADECFF",
          200: "#00D9FA",
          300: "#00B9D5",
          400: "#009CB4",
          500: "#008094",
          600: "#006576",
          700: "#004C58",
          800: "#00363F",
          900: "#001F26",
          950: "#001418",
          DEFAULT: "#008094",
          foreground: "#FFFFFF",
          button: "var(--color-primary-600)",
          buttonHover: "var(--color-primary-800)",
          buttonText: "var(--color-primary-foreground)",
        },
        secondary: {
          50: "#FFE6DF",
          100: "#FFCCBC",
          200: "#FF9563",
          300: "#D96904",
          400: "#A34D02",
          500: "#703301",
          600: "#5C2801",
          700: "#481E00",
          800: "#381600",
          900: "#250C00",
          950: "#180600",
        },
      },
    },
  },
};

export default withBase(config);
