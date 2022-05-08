import React, {Component, useState} from "react";
import Operations from "../AxiosRequests/Axiosfunc";


const Shifts = new Operations()

export default class ShiftOp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({inputValue: event.target.value})
    }

    handleSubmit(event){
        Shifts.postShift({'shiftnum': this.state.inputValue});
        this.getData();
        this.setState({inputValue:''})
    }

    getData(){
        Shifts.getShifts().then(result=>{
            this.setState({data:result.data})
            console.log(result.data)
        })
    }

    componentDidMount() {
        this.getData()
    }

    render(){
        return(
            <div>
                <input type={"text"} onChange={this.handleChange} value={this.state.inputValue}/>
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        )
    }


}