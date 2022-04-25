const { Component } = require("react");

class StateDemo extends Component {
    constructor() {
        super();
        this.state = { number: 1 }
    }
    increaseNumber = () => {
        this.setState({number:this.state.number+1})
    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.increaseNumber}>Click me !</button>
            </div>
        )
    }
}
export default StateDemo;