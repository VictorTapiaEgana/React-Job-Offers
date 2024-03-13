import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import imgX from "../../assets/images/icon-remove.png"

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
                       <button className='botonx' onClick={()=>{setArrayRole('')}}>
                            <img src={ imgX } alt="Boton eliminar filtro"/>
                       </button>
                   </div>                
             }
            
             {level &&                 
                   <div key={uuidv4()} className='tag-filter'> 
                       <div>{  level } </div>                      
                       <button className='botonx' onClick={()=>{setArrayLevel('')}}>
                       <img src={ imgX } alt="Boton eliminar filtro"/> 
                       </button>
                   </div>                
             }

             {lenguajes.length > 0 &&
              lenguajes.map(leng =>{
                return(
                    <div key={uuidv4()} className='tag-filter'> 
                       <div>{  leng } </div>                      
                       <button className='botonx' onClick={()=>{setArrayLenguajes(lenguajes.filter(lengu => lengu != leng ) )}}>
                       <img src={ imgX } alt="Boton eliminar filtro"/>
                       </button>
                    </div> 
                )                
             })} 
             
             {tools.length > 0 &&
              tools.map(toools =>{
                return(
                    <div key={uuidv4()} className='tag-filter'> 
                       <div>{  toools } </div>                      
                       <button className='botonx' onClick={()=>{setArrayTools(tools.filter(tolls => tolls != toools))}}>
                       <img src={ imgX } alt="Boton eliminar filtro"/>
                       </button>
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