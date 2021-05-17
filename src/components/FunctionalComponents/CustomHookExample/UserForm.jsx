import React from 'react'
import useInput from './useInput';

function UserForm() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = (event) => {
        event.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label>First Name</label>
                    <input 
                        // value={firstName} 
                        // onChange={(e) => setFirstName(e.target.value)} 
                        {...bindFirstName}
                        type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                        // value={lastName} 
                        // onChange={(e) => setLastName(e.target.value)} 
                        {...bindLastName}
                        type="text" />
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default UserForm
