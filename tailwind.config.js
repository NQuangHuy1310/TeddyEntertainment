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
        LightPrimary: '#3498db',
        LightSecondary: '#7ED4CF',
        LightSuccess: '#58C27D',
        LightError: '#f44336',
        LightWarning: '#ffb74d',

        DarkPrimary: '#5e97f6',
        DarkSecondary: '#3a7359',
        DarkSuccess: '#5bc0de',
        DarkError: '#b95940',
        DarkWarning: '#ff9949',

        Blue50: '#E6F2FF',
        Blue100: '#B0D6FF',
        Blue200: '#8AC2FF',
        Blue300: '#54A6FF',
        Blue400: '#3395FF',
        Blue500: '#007AFF',
        Blue600: '#006FE8',
        Blue700: '#0057B5',
        Blue800: '#00438C',
        Blue900: '#00336B',

        Cyan50: '#EBF7FD',
        Cyan100: '#BFE6F7',
        Cyan200: '#A1D9F4',
        Cyan300: '#76C8EE',
        Cyan400: '#5BBDEB',
        Cyan500: '#32ADE6',
        Cyan600: '#2E9DD1',
        Cyan700: '#247BA3',
        Cyan800: '#1C5F7F',
        Cyan900: '#154961',

        Disabled: '#f3f3f3',
        Black: '#333',
        White: '#fff',
        InputBorder: '#c4c4c4'
      },
      textColor: {
        LightPrimary: '#050505',
        DarkPrimary: '#E4E6EB',

        Primary: '#75B6FF',
        Secondary: '#65676B',

        Disabled: '#A0A0A0'
      },
      backgroundColor: {
        Light: '#f0f2f5',
        LightBase: '#fff',

        Dark: '#18191A',
        DarkBase: '#242526'
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        wide: '1440px'
      }
    }
  },
  plugins: []
}
