import * as C from './style';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
  item: Item
  onCheck: (itemId: number, done: boolean) => void
};

export const ListItem = ({ item, onCheck }: Props) => {

  const [ isChecked, setIsChecked ] = useState(item.done);

  const handleItemChange = (itemId: number, checked: boolean) => {
    setIsChecked(checked);
    onCheck(itemId, checked);
  };

  return (
    <C.Container done={isChecked}>
      <input type="checkbox"
             checked={isChecked}
             onChange={e => handleItemChange(item.id, e.target.checked)}
      />
      <label>{item.name} - {item.done.toString()}</label>
    </C.Container>
  );
};
