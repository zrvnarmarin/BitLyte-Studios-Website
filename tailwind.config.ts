import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "420px",
        sm: "640px", // Small screens, such as mobile phones (up to 640px)
        md: "768px", // Medium screens, such as tablets (between 640px and 767px)
        lg: "1024px", // Large screens, such as laptops (between 768px and 1023px)
        xl: "1280px", // Extra-large screens, such as desktops (between 1024px and 1279px)
        "2xl": "1440px", // Larger desktop screens (between 1280px and 1535px)
        "3xl": "1680px",
      },
      fontSize: {
        "2xs": "10px",
      },
    },
    colors: {
      "primary-blue": "#1A9FFF",
      "primary-purple": "#C17EF1",
      "primary-green": "#17DE6D",
      "primary-brown": "#3D3D3D",
      "dark-blue": "#0083E0",
      "dark-purple": "#AF5AED",
      "dark-green": "#16BB5E",
      "light-blue": "#33AAFF",
      "light-purple": "#D3A3F5",
      "light-green": "#59EE99",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addComponents, addUtilities }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
      addComponents({
        //
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
export default config;
