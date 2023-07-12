import { useState } from "react"

export const useForm = (initialValue) => {
 
   const [inputData, setInputData] = useState(initialValue)

   const onInputChange = (event) => {
   const { name, value} = event.target;
    setInputData({
        ...inputData,
        [name]: value
    });
   }

   return {
    inputData,
    onInputChange
   }
}
