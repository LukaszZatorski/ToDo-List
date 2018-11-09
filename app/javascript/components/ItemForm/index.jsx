// @flow
import React from 'react';
import axios from 'axios';

type ToDoItem = {
  id: number,
  completed: boolean,
  title: string,
};

type ItemProps = {
  item: ToDoItem,
  stopEditing: () => void,
  updateItems: (item: ToDoItem) => void,
};

type ItemFormState = {
  title: string,
};

class ItemForm extends React.Component<ItemProps, ItemFormState> {
  static defaultProps = {
    item: { title: '', completed: false, id: 0 },
  };

  state = {
    title: this.props.item.title,
  };

  componentDidMount() {
    if (this.input) this.input.focus();
  }

  handleSubmit = (event: SyntheticEvent<>) => {
    const { title } = this.state;
    const { item, stopEditing, updateItems } = this.props;
    if (title) {
      item.id === 0
        ? axios
          .post('api/v1/items', {
            item: { title },
          })
          .then((response) => {
            console.log(response);
            updateItems(response.data);
            this.setState({ title: '' });
          })
          .catch(error => console.log(error))
        : axios
          .put(`api/v1/items/${item.id}`, {
            item: { title },
          })
          .then((response) => {
            console.log(response);
            updateItems(response.data);
          })
          .catch(error => console.log(error));
    }
    event.preventDefault();
    stopEditing();
  };

  handleInput = (event: SyntheticInputEvent<>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyDown = (event: SyntheticKeyboardEvent<>) => {
    const { stopEditing } = this.props;
    if (event.key === 'Escape') stopEditing();
  };

  input: ?HTMLInputElement;

  render() {
    const { title } = this.state;
    return (
      <React.Fragment>
        <form className="item-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="What need to do?"
            onChange={this.handleInput}
            onKeyDown={this.handleKeyDown}
            onBlur={this.handleSubmit}
            ref={(el) => {
              this.input = el;
            }}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default ItemForm;
