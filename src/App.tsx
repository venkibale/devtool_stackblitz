import Game from './Game'

const TOTAL_BOXES = 12;

const App = () => {
  return (
    <div>
      <Game total={TOTAL_BOXES} />
    </div>
  );
};

export default App;