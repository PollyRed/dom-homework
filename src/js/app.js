function renderBoard(board) {
  const fields = [];
  for (const [i, row] of board.entries()) {
    for (const j of row.entries()) {
      fields.push(`
        <div class="field" 
          style="grid-row:${i + 1};grid-column:${j + 1};">
        </div>
      `);
    }
  }

  const boardEl = document.getElementById('board');
  boardEl.innerHTML = fields.join('');
}

function createBoard() {
  const board = [];
  const size = 4;
  for (let i = 0; i < size; i += 1) {
    const boardRow = [];
    for (let j = 0; j < size; j += 1) {
      boardRow.push('');
    }
    board.push(boardRow);
  }
  renderBoard(board);
}

window.addEventListener('load', () => {
  createBoard();
  const fields = Array.from(document.querySelectorAll('.field'));

  const goblin = document.createElement('div');
  goblin.classList.add('goblin');

  let currentIndex = -1;

  setInterval(() => {
    if (document.querySelector('.goblin')) {
      document.querySelector('.goblin').remove();
    }

    let randomIndex = Math.floor(Math.random() * fields.length);
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * fields.length);
    }
    currentIndex = randomIndex;

    fields[randomIndex].appendChild(goblin);
  }, 1000);
});
