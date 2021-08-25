import React, { Component } from 'react'

class ClassCounter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,
            name: '',
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
            }
        });
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating Document title');
            document.title = `You clicked ${this.state.count} times`;
        }
    }

    componentWillUnmount() {

    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                <button onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClassCounter2
