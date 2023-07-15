import { useState } from "react";

export const useForm = (initialValue) => {
 
   const [inputData, setInputData] = useState(initialValue);

   const [showForm, setShowForm] = useState(true);

   const [showUser, setShowUser] = useState(false);

   const onInputChange = (event) => {
   const { name, value} = event.target;
    setInputData({
        ...inputData,
        [name]: value
    });


   }

   const formIsValid = {
    name: false,
    email: false,
    phone: false
}



const onFormValid = (e) => {

e.preventDefault()

const regex = /^\w{1,25}(@\w{1,10}.com)$/gi
const regex2 = /^\d{11}$/gi
   

if(inputData.name.trim().length > 0) formIsValid.name = true
if(regex.test(inputData.email)) formIsValid.email = true
if(regex2.test(inputData.phone)) formIsValid.phone = true

const valid = Object.values(formIsValid);
const forArray = valid.findIndex((val) => val === false);

if(forArray === -1) setTimeout(() => {
    setShowForm(false);
    setShowUser(true);
}, '3000');

    else{  alert('No valid');
    }

      }

   return {
    inputData,
    onInputChange,
    onFormValid,
    showForm,
    showUser
   }
}
