
export const ItemForm = ({ onInputChange, name, email, phone }) => {
 
  return (
    <>
    <input type="text"
           name="name"
           value={name}
           placeholder="Nombre"
           onChange={ onInputChange } />

    <input type="email"
           name="email"
           value={email}
           placeholder="Email"
           onChange={ onInputChange } />

    <input type="tel"
           name="phone"
           value={phone}
           placeholder="Teléfono"
           onChange={ onInputChange } />
    </>
  )
}
