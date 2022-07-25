import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Form from './form'

const defaultData = ['Eleftheria', 'Gennadios', 'Lysimachos']

function App() {
const [data, setData ] = useState(defaultData)
const [name, setName ] = useState('')

const handleChange = (e) => {
  e.preventDefault();
  setName(e.target.value)

}
const handleSubmit = (e) => {
e.preventDefault()
  setData([...data, name])
  console.log("DATA CEST", data)

}

const arrayChunk = (arr, n) => {
  const array = arr.slice();
  const chunks = [];
  while (array.length) chunks.push(array.splice(0, n));
  return chunks;
};

let usableData = arrayChunk(data, 3)
/* console.log('DATA', data) */
console.log('NAME', name)
console.log('DATA', data)
console.log('usableData', usableData)

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
    {data.map((name, i) =>
    
    <div key={i}
    className="member-item">{name}</div> 
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
