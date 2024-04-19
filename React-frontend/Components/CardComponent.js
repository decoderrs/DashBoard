import React, { Component } from "react";
import { Card, CardBody, Breadcrumb, CardImgOverlay } from "reactstrap";

class Card extends Component {

    constructor(props){
        super(props)
        this.props = props;
    }

    render(){
        const getVariables = [...this.props.countries[0].keys()]
        return(
            <React.Fragment>
                <div className="container">
                    
                    <Card>
                        <CardBody>
                            <h1>{this.props.countries[0]}</h1>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
    
}