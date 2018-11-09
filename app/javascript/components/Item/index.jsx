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
  onEditing: (id: number) => void,
  onDelete: (id: number) => void,
};

const Item = ({
  item, onComplete, onEditing, onDelete,
}: ItemProps) => (
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
    <div
      className={classNames('item-title', { completed: item.completed })}
      role="button"
      tabIndex={0}
      onClick={() => onEditing(item.id)}
      onKeyPress={() => onEditing(item.id)}
    >
      {item.title}
    </div>
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
