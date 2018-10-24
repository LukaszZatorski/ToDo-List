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

const Item = ({ item }: ItemProps) => (
  <div>{item.title}</div>
);

export default Item;
