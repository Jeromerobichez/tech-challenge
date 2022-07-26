import React, {useEffect, useState} from 'react'

import './App.css';
/* import Form from './form' */
import axios from 'axios'

function App() {

const [name, setName ] = useState('')
const [crew, setCrew] = useState([])
const [message, setMessage] = useState('')
useEffect(() => {
  axios
  .get('https://challenge.osc-fr1.scalingo.io')
  .then(res => {
    setCrew(res.data)
  })
  .catch(e => {
    setMessage(`Erreur lors de la création : ${e.message}`)
    console.log(message)
  })

}, []);
const handleChange = (e) => {
  e.preventDefault();
  setName(e.target.value)

}
const handleSubmit = (e) => {
  e.preventDefault()
  axios
    .post('https://challenge.osc-fr1.scalingo.io', {name})
    .then(res => {
      setCrew(res.data)
    })
    .catch(e => {
      setMessage(`Erreur lors de la création : ${e.message}`)
      console.log(message)
    })
}


  return (
    <div className="App">
      <header className='App-header'>
  <h1>
    <img className='logo-wild' src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
    Les Argonautes
  </h1>
</header>
<main>
  

  <h2>Ajouter un(e) Argonaute</h2>
{/*   <Form setName={setName} /> */}
<form className="new-member-form">
    <label id="name">Nom de l&apos;Argonaute
    <input id="name" name="name" type="text" placeholder="Charalampos"  onChange={handleChange}  />
    </label>
    <button type="submit"
    onClick={handleSubmit}>Envoyer</button>
  </form>
  

  <h2>Membres de l'équipage</h2>
  <section className="member-list">
  <div className="member-grid">
    {crew.map((member, i) =>
    
    <div key={member._id}
    className="member-item">{member.name}</div> 
    )}
    </div>
  </section>
</main>

<footer>
  <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
</footer>
    </div>
  );
}

export default App;
