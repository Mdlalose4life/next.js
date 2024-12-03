import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#da00ff",
                    
          "secondary": "#00e900",
                    
          "accent": "#ff0000",
                    
          "neutral": "#0a0408",
                    
          "base-100": "#fcf9ff",
                    
          "info": "#00bdee",
                    
          "success": "#008e62",
                    
          "warning": "#fcc600",
                    
          "error": "#ff0056",
          body : {
            "background-color": "#e3e6e6"
          }
          },
        },
      ],
    },
  plugins: [require("daisyui")],
} satisfies Config;
