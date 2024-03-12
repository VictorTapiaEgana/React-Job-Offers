import "./JobCard.css"
import PropTypes from 'prop-types';

const JobCard = ({ company , logo, neww, featured,position,role,level,postedAt,contract,location,languages,tools, setArrayRole, setArrayLevel,GenerarArrayLenguajes, GenerarArrayTools}) =>{

    return(
        
        <div className={ featured ? "card border" : "card"}>

            <div className="left-side">
                <div className="card-img">
                   <img id="imgCard" src={ logo } alt="Oferta Laboral"/>                       
                </div>

                <div className="card-content">

                        <div className="destacado">
                            <h3 className="color-verde"> { company }</h3> 

                            <div className="detalles">
                                {
                                    neww && <p className="tags new">NUEVO</p>
                                }
                                {
                                    featured && <p className="tags featured">DESTACADO</p>        
                                }
                                
                            </div>
                            
                        </div>                    

                    <h2 className="bold">{ position }</h2>

                    <div id="jodDetails" className="gris">
                        <h4>{postedAt }</h4>
                        <h4 className="dot">·</h4>
                        <h4>{ contract }</h4>
                        <h4 className="dot">·</h4>
                        <h4>{ location }</h4>                       
                    </div> 

                </div>
            </div>
            <hr id="linea"></hr>
            <div className="right-side">
                <div className="card-tags">

                    <div className="filter-tag" onClick={()=>{ setArrayRole( role )}}>
                        { role } 
                    </div>
                    <div className="filter-tag" onClick={()=>{ setArrayLevel( level )}}>
                        { level } 
                    </div>

                    {languages.length > 0 && languages.map((lang, index) => (
                        <div className="filter-tag" key={index} onClick={()=>{ GenerarArrayLenguajes( lang ) }}>{lang}</div>
                    ))}

                    {tools.length > 0 && tools.map((tools, index) => (
                        <div className="filter-tag" key={index} onClick={()=>{ GenerarArrayTools ( tools )}}>{tools}</div>
                    ))}

                </div>               
            </div>

        </div> //fin card      

    )  // fin return

} // fin component

export default JobCard;

JobCard.propTypes = {
    logo: PropTypes.string,
    company : PropTypes.string,
    neww : PropTypes.bool,
    featured : PropTypes.bool,
    position : PropTypes.string,
    role : PropTypes.string,
    level : PropTypes.string,
    postedAt : PropTypes.string,
    contract : PropTypes.string,
    location : PropTypes.string,
    languages: PropTypes.array,
    tools: PropTypes.array,
    setArrayRole : PropTypes.func,
    setArrayLevel: PropTypes.func,
    GenerarArrayLenguajes: PropTypes.func,
    GenerarArrayTools: PropTypes.func
};