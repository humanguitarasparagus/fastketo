import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // FastKeto Brand Colors
        primary: {
          50: '#f0f7f3',
          100: '#d9ebe0',
          200: '#b3d7c2',
          300: '#8cc3a3',
          400: '#66af85',
          500: '#2D5F3F', // Main brand green
          600: '#244d32',
          700: '#1b3a26',
          800: '#122619',
          900: '#09130d',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe4d1',
          200: '#ffc9a3',
          300: '#ffad75',
          400: '#ff9147',
          500: '#FF6B35', // Warm orange
          600: '#cc562a',
          700: '#994020',
          800: '#662b15',
          900: '#33150b',
        },
        success: '#7CB342', // Fresh green
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
