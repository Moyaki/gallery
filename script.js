const darkColors = ['#001219', '#005f73', '0a9396', '#6b705c', '#9b2226', '#ae2012', '#bb3e03', '#023047', '#fb8500', '#7f5539'];

const lightColors = ['#94d2bd', '#e9d8a6', 'fec5bb', 'e9c46a', '8ecae6', '#fec89a', '#f1faee', '#f8edeb', '#f1c0e8', '#b7e4c7']

const allBoxes = document.querySelectorAll('.text-div')

const getRandomNumber = () => {
  const lightColor = Math.floor(Math.random() * 10);
  const darkColor = Math.floor(Math.random() * 10);
  return {lightColor, darkColor}
}

const changeColor = (index) => {
  const colorIndex = getRandomNumber()

  allBoxes[index].style.backgroundColor = darkColors[colorIndex.darkColor]

 allBoxes[index].children[0].style.color = lightColors[colorIndex.lightColor]
  
}
