const light = {
  name: 'light',
  preview: '',
  mainColor: [255, 255, 255], // RGB
  colors: [
    ['red', 'blue', 'green'],
    ['blue', 'green', 'red'],
    ['green', 'red', 'blue']
  ],
  fonts: [
    [12, 14, 16, 18, 20, 24],
    [16, 18, 20, 24, 28, 36],
    [24, 18, 20, 24, 28, 32]
  ]
}

const dark = {
  name: 'dark',
  preview: '',
  mainColor: [0, 0, 0], // RGB
  colors: [
    ['dark', 'blue', 'green'],
    ['blue', 'green', 'dark'],
    ['green', 'dark', 'blue']
  ],
  fonts: [
    [12, 14, 16, 18, 20, 24],
    [16, 18, 20, 24, 28, 36],
    [24, 18, 20, 24, 28, 32]
  ]
}

export const themes = {
  light,
  dark
}

export default themes
