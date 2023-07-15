import { useForm } from "../hooks/useForm";
import { ItemForm } from "./ItemForm";




export const FormContainer = () => {

const { inputData, onInputChange, onFormValid, showForm, showUser } = useForm({
    name: '',
    email: '',
    phone: ''
})



  return (
    <>
    <h1>Datos de registro</h1>
    <form>
    {
      (showForm === true) &&  <ItemForm 
      onInputChange={ onInputChange }
      onFormValid={ onFormValid }
      { ...inputData }
      />
    }
    {
      (showUser === true) && 
      <ul>
        <li>{inputData.name}</li>
        <li>{inputData.email}</li>
        <li>{inputData.phone}</li>
      </ul>
    }
    </form>
   </>
  )
}
