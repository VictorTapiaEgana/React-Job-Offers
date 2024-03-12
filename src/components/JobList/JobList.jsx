import JobCard from "../JobCard/JobCard";
import "./JobList.css"

import joboffers from "../../../data.json";
import { useState } from "react";
import JobFilter from "../JobFilter/JobFilter";

const JobList = () =>{
   

    const [ arrayRole , setArrayRole ]  = useState();
    const [ arrayLevel , setArrayLevel ]  = useState();
    const [ arrayLenguajes , setArrayLenguajes ]  = useState([]);
    const [ arrayTools , setArrayTools ]  = useState([]);

    const GenerarArrayLenguajes = (filtro) => {
        const existeElFiltro = arrayLenguajes.includes(filtro);
        !existeElFiltro && setArrayLenguajes([...arrayLenguajes, filtro]);
        console.log(arrayLenguajes)
    }
 
    const GenerarArrayTools = (filtro) => {
        const existeElFiltro = arrayTools.includes(filtro);
        !existeElFiltro && setArrayTools([...arrayTools, filtro]);
    }

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

            {joboffers.map(jobs =>{
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