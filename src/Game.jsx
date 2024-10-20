import { useEffect, useState, useMemo } from 'react';
import { getRandomColors, shuffle } from './utils';

const Game = ({ total }) => {
  const [boxes, setBoxes] = useState([]);
  const [boxOpened, setBoxOpened] = useState('');

  useEffect(() => {
    const colors = getRandomColors(total / 2);
    let boxObj = colors.map((color) => ({ bgColor: color, visible: false }));
    setBoxes(shuffle([...boxObj, ...boxObj]));
  }, []);

  const gameOver = useMemo(() => boxes.every((b) => b.visible), [boxes]);

  const handleClick = (index) => {
    if (!boxOpened) {
      setBoxOpened(boxes[index].bgColor);
    } else {
      const newBoxColor = boxes[index].bgColor;
      if (newBoxColor !== boxOpened) {
        setTimeout(() => {
          const boxesCopy = boxes.map((b, i) =>
            i === index || b.bgColor === boxOpened
              ? { ...b, visible: false }
              : b
          );
          setBoxes(boxesCopy);
        }, 500);
      }
      setBoxOpened('');
    }
    const boxesCopy = boxes.map((b, i) =>
      i === index ? { ...b, visible: true } : b
    );
    setBoxes(boxesCopy);
  };

  return (
    <>
      {gameOver ? (
        <div>Game Over</div>
      ) : (
        <div className="container">
          {boxes.map((box, ind) => (
            <div
              className="box"
              style={{ backgroundColor: box.visible ? box.bgColor : '' }}
              key={ind}
              onClick={() => handleClick(ind)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Game;
