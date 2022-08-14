import * as C from './style';
import { KeyboardEvent, useState } from 'react';

type Props = {
  onAdd: (taskName: string) => void
}

export const AddItem = ({ onAdd }: Props) => {

  const [ inputText, setInputText ] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if ( e.code === 'Enter' && inputText !== '' ) {
      onAdd(inputText);
      setInputText('');
    }
  };

  return (
    <C.Container>
      <div className="image">➕</div>
      <input type="text"
             placeholder="Adicione uma tarefa"
             value={inputText}
             onChange={e => setInputText(e.target.value)}
             onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};


