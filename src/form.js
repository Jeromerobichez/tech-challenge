import React from 'react'

const Form = ({setName, handleSubmit, handleChange} ) => {
  


return(
  <form className="new-member-form">
  <label className="form-label" id="name">Nom de l&apos;Argonaute
  <input className="form-input"id="name" name="name" type="text" placeholder="Charalampos"  onChange={handleChange}  />
  </label>
  <button type="submit"
  onClick={handleSubmit}>Envoyer</button>
</form>
)
}
export default Form;
