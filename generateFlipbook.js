const flipbookContainer = document.getElementById('flipbook-container');

const images = [
  ["1.png", "2.png"],
  ["3.svg", "4.svg"],
  ["5.svg", "6.svg"],
  ["7.svg", "8.svg"],
  ["9.svg", "10.svg"],
  ["11.svg", "12.svg"],
  ["13.png", "14.png"],

];

images.forEach((pair, index) => {
  const flipBox = document.createElement('div');
  flipBox.className = 'flip-box';
  flipBox.id = `flip${index + 1}`;
  flipBox.style = `position: absolute; top: 0; left: 0; z-index: -${index};`;

  flipBox.innerHTML = `
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <img src=".\\obrazki\\${pair[0]}" alt="brak obrazka">
      </div>
      <div class="flip-box-back">
        <img src=".\\obrazki\\${pair[1]}" alt="brak obrazka">
      </div>
    </div>
  `;

  flipbookContainer.appendChild(flipBox);
});
