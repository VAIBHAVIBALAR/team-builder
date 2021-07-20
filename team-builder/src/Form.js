import React from 'react'

export default function TeamForm(props){
    const{ values, update, submit } = props

    const onChange = evt =>{
        const{name,value} = evt.target
        update(name,value)
    }
    
    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit} >
            <div className='form-group inputs'>
                <label htmlFor='name'>name
                <input
                id = 'username'
                type= 'text'
                name= 'name'
                onChange={onChange}
                values={values.name}
                />
                </label>
                <label htmlFor='email'>Email
                <input 
                id='email'
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                />
                </label>
                <label htmlFor='role'>Role
                <select id='role' name='role' onChange={onChange} value={values.role}>
                    <option value=''>--Select a Role--</option>
                    <option value='Student'>--Student--</option>
                    <option value='Frontend Eng'>--Frontend Team--</option>
                    <option value='Backend eng'>--Backend Team--</option>
                    <option value='Alumni'>--Alumni--</option>
                </select>
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}