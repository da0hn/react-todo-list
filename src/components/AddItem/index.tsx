import * as C from './style';


export const AddItem = () => {
  return (
    <C.Container>
      <div className="image">➕</div>
      <input type="text"
             placeholder="Adicione uma tarefa"
      />
    </C.Container>
  );
};


