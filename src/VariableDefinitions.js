import React from 'react'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './styles.css'
import VariableDefinition from './VariableDefinition'

class VariableDefinitions extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {idToVarStates} = this.props
        return (
            <TransitionGroup className="todo-list">
                {idToVarStates.map(({ id, text }) => (
                    <CSSTransition
                        key={id}
                        timeout={500}
                        classNames="fade"
                    >
                        <VariableDefinition text={text} key={id} {...this.props}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        )
    }
}

export default VariableDefinitions
