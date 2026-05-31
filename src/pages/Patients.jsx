import React, { useEffect,useState } from 'react'
import axios from 'axios';
function Patients(){
    const[patients,setPatients]=useState([])
    const[search,setSearch]=useState('')
    async function fetchData(){
        try{
            const res=await axios.get('https://doc-back.onrender.com/patients')
            console.log(res.data);
            setPatients(res.data)

        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    })
    const filteredPatients=patients.filter((items)=>{
        return items.name.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <div>
    <center>
    <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
</center>
        {
            patients.length===0
            ?
            (<h1>No patients available</h1>)
            :
            (
                <>
                <h1>Patients</h1>
              <div id="patientcard">
                {
                    filteredPatients.map((v,i)=>(
                        <div key={v.id}>
                            <p>patient name:{v.name}</p>
                            <h4>disease:{v.disease}</h4>
                            <h2>appointed doctor:{v.doctor?.name}</h2>
                        </div>    
                    ))
                }
              </div>
                </>
            )
           
        }
        </div>
    )
}
export default Patients