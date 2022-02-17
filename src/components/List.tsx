import { useState } from "react";

type ListProps = {
  inititalItems: string[];
};

export function List({ inititalItems }: ListProps) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(inititalItems);

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  function removeFromList(itemRemove: string) {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== itemRemove));
    }, 500);
  }

  return (
    <>
      <input
        placeholder="Novo item"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
