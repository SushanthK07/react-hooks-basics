import React, {useState} from 'react'
import useInput from './useInput';

function UserForm1() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = event => {
        event.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    {/* <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/> */}
                    <input type='text' {...bindFirstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    {/* <input type='text' value={lastName} onChange={e => setLastName(e.target.value)}/> */}
                    <input type='text' {...bindLastName}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm1
