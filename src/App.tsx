import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/Item';

const App = () => {

  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: 'Comprar um pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {list.map((item, index) => (
          <div>{item.name}</div>
        ))}


      </C.Area>
    </C.Container>
  );
};

export default App;
