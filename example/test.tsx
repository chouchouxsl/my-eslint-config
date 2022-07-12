import React, { type FC, useState } from 'react'

const Com: FC = () => {
    const [msg, setMsg] = useState<string>('')

    return (
        <>
            <div className="container">{msg}</div>
            <button onClick={() => setMsg('hello world!')}>setMsg</button>
        </>
    )
}

export default Com
