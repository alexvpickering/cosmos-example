import React from 'react'

class Input extends React.Component {
    render() {
        return (
            <div>
                <button>{this.props.doSomething}</button>
            </div>
        )

    }
}

export default Input