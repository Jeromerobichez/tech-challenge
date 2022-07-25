import React from 'react'

const Form = (setName) => {
  


return(
    <form className="new-member-form">
    <label id="name">Nom de l&apos;Argonaute
    <input id="name" name="name" type="text" placeholder="Charalampos"  onChange={(e)=> setName(e.target.value)}  />
    </label>
    <button type="submit">Envoyer</button>
  </form>
)
}
export default Form;
