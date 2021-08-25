import React, { Component } from 'react'

class ClassIntervalCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,
        }
    }

    tick = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
            }
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default ClassIntervalCounter
