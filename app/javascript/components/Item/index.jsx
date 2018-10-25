// @flow
import React from 'react';

type ToDoItem = {
  id: number,
  completed: boolean,
  title: string,
}

type ItemProps = {
  item: ToDoItem,
}

const Item = ({ item, onDelete }: ItemProps) => (
  <div className="to-do-item">
    <p className="item-title">{item.title}</p>
    <span className="delete-button" onClick={() => onDelete(item.id)}>x</span>
  </div>
);

export default Item;
