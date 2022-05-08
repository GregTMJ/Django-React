import React, {Component} from "react";
import Operations from "../AxiosRequests/Axiosfunc";
import "../styles/Main.css";
import {Link} from "react-router-dom";


const units = new Operations()

export default class Units extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "loading"
        }
    }

    componentDidMount() {
        units.getUnits()
            .then(
                response => {
                    if (response.status > 400) {
                        return this.setState(() => {
                            return {placeholder: "Something went wrong!"};
                        })
                    } else {
                        const rawData = response.data;
                        // console.log(rawData)
                        return this.setState(() => {
                            return {
                                data: rawData,
                                loaded: true,
                            }
                        })
                    }
                }
            )
    }

    render() {

        return (
            <div className="bg_image">

                {this.state.data.map(machine => {
                    if (machine.online_accessible) {
                        return (
                            <div key={machine.id} className={"main-content"}><Link
                                to={`/techOp/${machine.unit_ref}?TechOp=${machine.unit_name}`}>
                                {machine.unit_name}
                            </Link></div>
                        );
                    }
                })}

            </div>
        )
    }
}