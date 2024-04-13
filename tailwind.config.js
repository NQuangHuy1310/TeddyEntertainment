/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ' sans-serif'],
        beVietNam: ['"Be Vietnam Pro"', 'sans-serif']
      },
      colors: {
        // button
        ButtonPrimary: '#3395FF',
        ButtonHover: '#00438C',
        ButtonInactive: '#FFFFFF33',

        // Colors
        primary: '#06aafe',
        error: '#FF6370',
        warning: '#ffc107',
        success: '#58C27D'
      },
      backgroundColor: {
        White: '#fff',
        Black: '#000',

        LightBase: '#F4F4F4',
        Light: '#FCFCFC',

        DarkBase: '#111315',
        Dark: '#1A1D1F'
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        wide: '1440px'
      },
      textColor: {
        White: '#fff',
        Black: '#000',

        // light
        LightPrimary: '#11142D',
        LightSecondary: '#808191',
        LightWhite: '#FCFCFC',

        //dark
        DarkPrimary: '#EFEFEF',
        DarkSecondary: '#6F767E'
      }
    }
  },
  plugins: []
}
