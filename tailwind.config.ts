import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        primary: "#8B5CF6",
        accent: "#C084FC",
        card: "rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center"
          }
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "neon-pulse": {
          "0%, 100%": {
            "text-shadow": "0 0 7px #8B5CF6, 0 0 10px #8B5CF6, 0 0 21px #8B5CF6",
            "box-shadow": "0 0 7px #8B5CF6, 0 0 10px #8B5CF6, 0 0 21px #8B5CF6"
          },
          "50%": {
            "text-shadow": "0 0 10px #8B5CF6, 0 0 15px #8B5CF6, 0 0 25px #8B5CF6",
            "box-shadow": "0 0 10px #8B5CF6, 0 0 15px #8B5CF6, 0 0 25px #8B5CF6"
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 7px #8B5CF6, 0 0 10px #8B5CF6, 0 0 21px #8B5CF6',
        'neon-accent': '0 0 7px #C084FC, 0 0 10px #C084FC, 0 0 21px #C084FC',
      },
      textShadow: {
        'neon': '0 0 7px #8B5CF6, 0 0 10px #8B5CF6, 0 0 21px #8B5CF6',
        'neon-accent': '0 0 7px #C084FC, 0 0 10px #C084FC, 0 0 21px #C084FC',
      }
    },
  },
  plugins: [],
};

export default config; 