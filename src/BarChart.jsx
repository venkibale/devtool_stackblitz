import {useMemo} from 'react';
import {motion} from 'framer-motion';
const Bar = ({ name, colour, ticketCount, height}) => {
  return (
    <motion.div className="bar"
      initial={{height: 0}}
      animate={{ height: `${height}%`}}
      exit={{height: 0}}
      style={{
          // height: `${ticketCount}%`,
          backgroundColor: colour,
        }}
      >
      <div className="tool-tip">{name} - {ticketCount}</div>
    </motion.div>
  )
}


const BarChart = ({data}) => {
  const maxHeight = useMemo(()=>{
    return  Math.max(...data.map(item => item.ticketCount));
  }, [])
  return (
    <>
    <div className="chart-container">
        <div className="chart">
        {data.map(item=>{
          return <Bar key={item.id} height={(item.ticketCount / maxHeight)* 100} {...item}/>
        }
        )}
        </div>
        <div className="y-axis-label">Number of tickets</div>
        <div className="x-axis-label">Departments</div>
    </div>
    </>
  );
}
export default BarChart;