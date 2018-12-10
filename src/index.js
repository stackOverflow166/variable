import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  ListGroup,
  Button,
} from 'react-bootstrap';
import uuid from 'uuid';
import VariableDefinitions from './VariableDefinitions'

import './styles.css';

class TodoList extends React.Component {
  state = {
    items: [
      { id: uuid(), text: 'first' },
      { id: uuid(), text: 'second' },
      { id: uuid(), text: 'third' },
      { id: uuid(), text: 'fourth' },
    ],
  };


  render() {
    const { items } = this.state;
    return (
      <Grid>
        <ListGroup>
          <VariableDefinitions idToVarStates={items}/>
        </ListGroup>
        <Button
          type="button"
          onClick={() => {
              const text = prompt('Enter some text');
              if (text) {
                  this.setState(state => ({
                      items: state.items.filter(
                          item => item.text !== text
                      )
                  }),() => console.log(this.state));
              }
          }}
      >
          Remove Item
      </Button>
          <Button
              type="button"
              onClick={() => {
                  const text = prompt('Enter current text');
                  if (text) {
                      this.setState(state => ({
                          items: [
                              ...state.items,
                              { id: uuid(), text },
                          ],
                      }));
                  }
              }}
          >
              Add Item
          </Button>
      </Grid>
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
