import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddItem } from './components/AddItem';

const App = () => {

  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: 'Comprar um pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    const updatedList = [ ...list ];
    updatedList.push({
      id: updatedList.length + 1,
      name: taskName,
      done: false,
    });
    setList(updatedList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddItem onAdd={handleAddTask}></AddItem>

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
