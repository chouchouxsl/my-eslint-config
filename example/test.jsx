import React, { useState } from 'react'

const Com = () => {
    const [msg, setMsg] = useState('')

    return (
        <>
            <div className="container">{msg}</div>
            <button onClick={() => setMsg('hello world!')}>setMsg</button>
        </>
    )
}

export default Com
