import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import "./JobFilter.css"

const JobFilter = ({ role, level,lenguajes, tools, setArrayLevel, setArrayRole, setArrayLenguajes, setArrayTools, contador }) =>{
    return(
        <div className="container">

            <div className='Filter-Count'> 

                <span>{ contador } Resultados </span>
            </div>
             
             {role &&                 
                   <div key={uuidv4()} className='tag-filter'> 
                       <div>{  role } </div>                      
                       <button onClick={()=>{setArrayRole('')}}>X</button>
                   </div>                
             }
            
             {level &&                 
                   <div key={uuidv4()} className='tag-filter'> 
                       <div>{  level } </div>                      
                       <button onClick={()=>{setArrayLevel('')}}>X</button>
                   </div>                
             }

             {lenguajes.length > 0 &&
              lenguajes.map(leng =>{
                return(
                    <div key={uuidv4()} className='tag-filter'> 
                       <div>{  leng } </div>                      
                       <button onClick={()=>{setArrayLenguajes(lenguajes.filter(lengu => lengu != leng ) )}}>X</button>
                    </div> 
                )                
             })} 
             
             {tools.length > 0 &&
              tools.map(toools =>{
                return(
                    <div key={uuidv4()} className='tag-filter'> 
                       <div>{  toools } </div>                      
                       <button onClick={()=>{setArrayTools(tools.filter(tolls => tolls != toools))}}>X</button>
                    </div> 
                )                
             })}

        </div>
    )}

export default JobFilter;

JobFilter.propTypes = {
    role : PropTypes.string,
    level: PropTypes.string,
    lenguajes : PropTypes.array,
    tools: PropTypes.array,
    setArrayLevel:PropTypes.func,
    setArrayRole:PropTypes.func,
    setArrayLenguajes:PropTypes.func,
    setArrayTools:PropTypes.func,
    contador:PropTypes.number
};