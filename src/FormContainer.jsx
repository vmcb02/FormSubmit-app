
import { ButtonForm } from "./ButtonForm"
import { ItemForm } from "./ItemForm"
import { useForm } from "./useForm"

export const FormContainer = () => {

const { inputData, onInputChange } = useForm({
    name: '',
    email: '',
    phone: ''
})

  return (
   <form>
    <h1>Datos de registro</h1>
    <ItemForm 
    onInputChange={ onInputChange }
    { ...inputData }
    />
    <ButtonForm />
   </form>
  )
}
