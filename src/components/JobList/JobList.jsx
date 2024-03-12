import JobCard from "../JobCard/JobCard";
import "./JobList.css"

import joboffers from "../../../data.json";
import { useEffect, useState } from "react";
import JobFilter from "../JobFilter/JobFilter";

const JobList = () =>{
   
    const [ofertasFiltradas ,setOfertasFiltradas] = useState(joboffers)
    const [ arrayRole , setArrayRole ]  = useState('Frontend');
    const [ arrayLevel , setArrayLevel ]  = useState();
    const [ arrayLenguajes , setArrayLenguajes ]  = useState([]);
    const [ arrayTools , setArrayTools ]  = useState([]);

    const GenerarArrayLenguajes = (filtro) => {
        const existeElFiltro = arrayLenguajes.includes(filtro);
        !existeElFiltro && setArrayLenguajes([...arrayLenguajes, filtro]);        
    }
 
    const GenerarArrayTools = (filtro) => {
        const existeElFiltro = arrayTools.includes(filtro);
        !existeElFiltro && setArrayTools([...arrayTools, filtro]);
    }
    
    useEffect(() => {
        console.log('useEffect', ofertasFiltradas);
        
        let newFilter = ofertasFiltradas;

        if (arrayRole) {
            newFilter = newFilter.filter(filt => filt.role === arrayRole);
        }

        setOfertasFiltradas(newFilter);

    }, [arrayRole]);

    return(
        <> 
           {(arrayRole || arrayLevel || arrayLenguajes.length > 0 || arrayTools.length > 0 ) && (
                <JobFilter
                        role = { arrayRole }
                        level = { arrayLevel }
                        lenguajes = { arrayLenguajes }
                        tools = { arrayTools }
                        setArrayRole = { setArrayRole }
                        setArrayLevel = { setArrayLevel }
                        setArrayLenguajes = { setArrayLenguajes }
                        setArrayTools = { setArrayTools }
                />
            )}

            {ofertasFiltradas.map(jobs =>{
                return(
                    <JobCard 
                            key={ jobs.id }
                            company = { jobs.company } 
                            logo = { jobs.logo }
                            neww = { jobs.new }
                            featured={ jobs.featured }
                            position ={ jobs.position }
                            role = { jobs.role }
                            level = { jobs.level }
                            postedAt = { jobs.postedAt }
                            contract = { jobs.contract }
                            location = { jobs.location }
                            languages = { jobs.languages }
                            tools = { jobs.tools }                          
                            setArrayRole = { setArrayRole }
                            setArrayLevel = { setArrayLevel }
                            GenerarArrayLenguajes = {  GenerarArrayLenguajes }                          
                            GenerarArrayTools = { GenerarArrayTools }
                    />
                )
            })}
        </>
    )
}

export default JobList;