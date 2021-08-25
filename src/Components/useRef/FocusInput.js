import React, {useEffect, useRef} from 'react'

function FocusInput() {
    
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default FocusInput
