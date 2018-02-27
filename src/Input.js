import React from 'react'

export default ({ doSomething }) => {
    return (
        <div>
            <button onClick={doSomething}>Do something!</button>
        </div>
    )
}