module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Strong-cyan": "hsl(172, 67%, 45%)",
        "Very-dark-cyan": "hsl(183, 100%, 15%)",
        "Dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "Grayish-cyan": "hsl(184, 14%, 56%)",
        "Light-grayish-cyan": "hsl(185, 41%, 84%)",
        "Very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        space: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        dollar: "url('./src/assets/images/icon-dollar.svg')",
        person: "url('./src/assets/images/icon-person.svg')",
      },
      backgroundPosition: {
        left: "3% 50%",
        "bottom-4": "center top 1rem",
      },
      backgroundSize: {
        sm: "0.5rem",
      },
      borderRadius: {
        ms: "4px",
      },
    },
  },
  plugins: [],
};
