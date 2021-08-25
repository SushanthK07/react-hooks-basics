import React, {useContext} from 'react'
import Level3 from './Level3'
import {UserContext, SurnameContext} from '../../App'

function Level2() {
    const user = useContext(UserContext);
    const surname = useContext(SurnameContext);

    return (
        <div>
            <h2>Level 2 - {user} {surname}</h2>
            <Level3 />
        </div>
    )
}

export default Level2
