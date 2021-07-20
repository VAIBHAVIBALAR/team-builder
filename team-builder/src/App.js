import React, {useEffect, useState} from 'react';
import './App.css';
import TeamForm from './Form';
import axios from './axios';
import TeamMate from './TeamMate'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const[teamMate, setTeamMate] = useState([])
  const[formValues, setFormValues] = useState(initialFormValues)
  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () =>{
    const newTeamMate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if(!newTeamMate.name || !newTeamMate.email || !newTeamMate.role)return
    axios.post('fakeapi.com', newTeamMate)
    .then(res =>{
      const teamMFromBackend = res.data
      setTeamMate([teamMFromBackend, ...teamMate])
      setFormValues(initialFormValues)
    })
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMate(res.data))
  }, [])

  return (
    <div className="App">
       <TeamForm  
       values={formValues}
       update={updateForm}
       submit={submitForm}
       />
       {teamMate.map(tM =>{
         return(
           <TeamMate key={tM.id} details={tM}/>
         )
       })}
    </div>
  );
}

export default App;
