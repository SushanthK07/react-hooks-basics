import React from 'react'
import {UserContext, SurnameContext} from '../../App'

function Level3() {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <SurnameContext.Consumer>
                            {surname => <h2>Level 3 - {user} {surname}</h2>}
                        </SurnameContext.Consumer>
                    );
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default Level3
