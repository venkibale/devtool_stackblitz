function _getRandomColor() {
    const randomColor = () => Math.floor(Math.random() * 256);
    const r = randomColor().toString(16).padStart(2, '0');
    const g = randomColor().toString(16).padStart(2, '0');
    const b = randomColor().toString(16).padStart(2, '0');
  
    return `#${r}${g}${b}`;
  }
  
  export function getRandomColors(limit) {
    const colors = [];
    const seen = new Set();
  
    for (let i = 0; i < limit; i++) {
      let color = _getRandomColor();
  
      while (seen.has(color)) {
        color = _getRandomColor();
      }
  
      colors.push(color);
    }
  
    return colors;
  }
  
  export const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]; // Swap
    }
    return arr;
  }