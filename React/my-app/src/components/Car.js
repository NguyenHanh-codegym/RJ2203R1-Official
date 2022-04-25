
import { Component } from "react";

class Car extends Component{
    render (){
        return (
            <div>
                {this.props.name}
                <br></br>
                {this.props.year}
            </div>
        )
    }
}
export default Car