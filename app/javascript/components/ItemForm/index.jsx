// @flow
import React from 'react';
import axios from 'axios';

type ItemFormState = {
  title: string,
};

class ItemForm extends React.Component<{}, ItemFormState> {
  state = {
    title: '',
  };

  handleSubmit = () => {
    const { title } = this.state;
    const item = {
      title,
    };
    axios
      .post('api/v1/items', {
        item,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  handleInput = (event: SyntheticInputEvent<>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form className="item-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="What need to do?"
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default ItemForm;
