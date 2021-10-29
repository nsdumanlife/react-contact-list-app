import React from 'react'
import { useState } from 'react'

function Form({ contacts, addContact }) {
    const [form, setForm] = useState({fullname : '', phone_number: ''})

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        if(form.fullname === "" || form.phone_number === ""){
            return false
        }   

        addContact([...contacts, form])
        setForm({ fullname:'', phone_number:'' })
    }
    return (
        <form onSubmit = { onSubmit }>
            <h3>New Contact</h3>
            <div>
                <input name='fullname' value={form.fullname} placeholder='Name' onChange={ onChangeInput } />
            </div>
            <div>
                <input name='phone_number' value={form.phone_number} placeholder='Phone Number' onChange={ onChangeInput }/>
            </div>
            <div className='addButton'>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
