// @flow
import React from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import Item from '../Item';
import ItemForm from '../ItemForm';

type ToDoItem = {
  id: number,
  completed: boolean,
  title: string,
};

type AppState = {
  items: Array<ToDoItem>,
};

class App extends React.Component<{}, AppState> {
  state = {
    items: [],
  };

  componentDidMount() {
    axios
      .get('api/v1/items.json')
      .then((response) => {
        console.log(response);
        this.setState({ items: response.data });
      })
      .catch(error => console.log(error));
  }

  deleteUser = (id: number) => {
    axios
      .delete(`api/v1/items/${id}`)
      .then(() => {
        const { items } = this.state;
        const itemIndex = items.findIndex(x => x.id === id);
        const updatedItems = update(items, { $splice: [[itemIndex, 1]] });
        this.setState({ items: updatedItems });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <div className="heading">
          <h1>To-do list</h1>
        </div>
        <div className="list">
          {<ItemForm />}
          {items.map(item => (
            <Item key={item.id} item={item} onDelete={this.deleteUser} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
