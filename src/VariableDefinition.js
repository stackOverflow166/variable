import React from 'react';
import {
    ListGroupItem
} from 'react-bootstrap';
import './styles.css'

class VariableDefinition extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        const {text,key} = this.props

        return (
            <ListGroupItem>
                {text}
            </ListGroupItem>
        )
    }
}

export default VariableDefinition
