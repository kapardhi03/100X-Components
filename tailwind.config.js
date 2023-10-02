/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./src/components/*.{html, js}"
  ], // look for tailwind css only in these directories with extension html/css. ignore every other directory
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      height:{
        "10.5":"2.625rem",
        "15":"3.75rem",
        "tweet":'13.75rem',
        '86':'22.25rem'
      },
      width:{
        '21':'5.375rem',
        '70':'17.875rem',
        '90':'20.875rem',
        '91':'21.75rem',
        '99':'26.625rem',
        '100':'27.625rem',
        'xxl':'30.125rem',
        'xxxl':'32rem',
        'tweet':'37.5rem'
      },
      colors:{
        "neutral-50":"#f9f9f9",
        "neutral-100":"#f4f4f4",
        "neutral-200":"#e4e4e4",
        "neutral-300":"#D3D3D3",
        "neutral-400":"#A2A2A2",
        "neutral-500":"#737373", 
        "neutral-600":"#525252",
        "neutral-700":"#404040",
        "neutral-800":"#262626",
        "neutral-900":"#171717",
        "neutral-950":"#0A0A0A",
        "neutral-1000":"#000000",
        "twitter-blue":"#1D9BF0",
        "twitter-blue-hover":"#1871CA",
        "twitter-blue-disabled":"#1E5D87",
        "blue-wash":"#75BEEF33",
        "button-stroke":"#546A7A",
        "search-bar-fill":"#212327",
        "card-fill":"#16181C",
        "success":"#00BE74",
        "error":"#8B141A",
      },
      boxShadow:{
        "md":"0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
      fontSize:{
        'xs':['0.75rem', {
          'lineHeight':'0.9375rem',
        }],
        'sm':['0.875rem', {
          'lineHeight': '1.0625rem',
        }],
        'base':[
          '1rem', {
            'lineHeight': '1.2rem',
          }
        ],
        'xl':['1.25rem', {
          'lineHeight': '1.5rem',
        }],
        '15':[
          '0.9375', {
            'lineHeight': '1.125rem'
          }
        ],
      }
    },
  },
  plugins: [],
}

