import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F5F6F8",
        panel: "#ECEFF3",
        surface: "#FFFFFF",
        line: "#DFE3EA",
        text: {
          DEFAULT: "#1B2333",
          muted: "#6B7280",
        },
        accent: {
          DEFAULT: "#E2661F",
          dim: "#FBE4D3",
        },
        signal: {
          DEFAULT: "#0E9C8C",
          dim: "#D8F1EC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        pulseline: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        pulseline: "pulseline 2.4s ease-in-out infinite",
        dash: "dash 1.6s linear forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
