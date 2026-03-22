tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#F05A28", light: "#FF7A4D", dark: "#C8441A" },
        navy: { DEFAULT: "#0A2D6E", dark: "#071D48", deeper: "#04122d" },
        gold: { DEFAULT: "#FFB800" },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        body: ['"Nunito"', "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.05)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.12)",
        brand: "0 6px 24px rgba(240,90,40,0.3)",
      },
    },
  },
};
