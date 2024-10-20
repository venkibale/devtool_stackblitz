import {useState} from 'react';
import CHART_DATA from './data';
import BarChart from './BarChart';
const App = () => {
  const [showChart, setShowChart] = useState(false);
  return (
    <div className="container">
      <button onClick={()=>{setShowChart(prev=>!prev)}}>Toggle Chart</button>
      { showChart ? <BarChart data={CHART_DATA}/> : null}
    </div>
  );
};

export default App;