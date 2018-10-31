// @flow
import React from 'react';
import classNames from 'classnames';

type ToDoItem = {
  id: number,
  completed: boolean,
  title: string,
};

type ItemProps = {
  item: ToDoItem,
  onComplete: (item: ToDoItem) => void,
  onDelete: (id: number) => void,
};

const Item = ({ item, onDelete, onComplete }: ItemProps) => (
  <div className="to-do-item">
    <div
      className="toggle-completed"
      role="button"
      tabIndex={0}
      onClick={() => onComplete(item)}
      onKeyPress={() => onComplete(item)}
    >
      <span
        className={classNames('checkmark', { completed: item.completed })}
      />
    </div>
    <p className={classNames('item-title', { completed: item.completed })}>
      {item.title}
    </p>
    <span
      className="delete-button"
      role="button"
      tabIndex={0}
      onClick={() => onDelete(item.id)}
      onKeyPress={() => onDelete(item.id)}
    >
      x
    </span>
  </div>
);

export default Item;
