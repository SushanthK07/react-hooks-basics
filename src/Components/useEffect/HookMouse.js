import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0); 
    const [y, setY] = useState(0); 

    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('use Effect called');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition);
        };
    }, []) 

    return (
        <div>
            <h2>Mouse Position X - {x}, Y - {y}</h2>
        </div>
    )
}

export default HookMouse
