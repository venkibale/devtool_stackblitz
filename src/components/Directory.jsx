import DATA from '../data.js';
import Nodes from './Nodes'
const Directory = () => {
  return (
    <Nodes nodes={DATA}></Nodes>
  );
}
export default Directory;