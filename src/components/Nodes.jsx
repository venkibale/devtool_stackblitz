import DATA from '../data.js';
import { FaCircle, FaAngleDown, FaAngleRight } from 'react-icons/fa'
import {useState} from 'react';
const Icon = ({isParentNode, isOpen, onClick}) => {
  if (isParentNode) {
    return (
      <button onClick={onClick}>
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
      </button>
    )
  }
  return (
    <FaCircle 
        style={{
          height: '6px'
        }}
      />
    );
}
const Node = ({label, link, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isParent = Boolean(children && children.length);
  return (
      <li>
        <div className="node">
          <div className="label">
            <Icon isOpen={isOpen} isParentNode={isParent} onClick={()=>setIsOpen(prev => !prev)}/>
            <a href={link}>{label}</a>
          </div>
        </div>
        {
          isParent && isOpen ? 
          <div className="node-content">
           <Nodes nodes={children}/>
          </div>
          : null
        }
      </li>
    );
}

const Nodes = ({nodes}) => {
  return (<ul className="nodes">
    {nodes.map(node => {
    return <Node key={node.id} {...node}></Node>
  })}
  </ul>)
}
export default Nodes;