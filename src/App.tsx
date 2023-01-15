import { ChangeEvent, useState } from 'react'
import { usePeopleList } from './reducers/peopleList'

const App = () => {
  const [list, ListDispatch] = usePeopleList()
  const [nameInput, setNameInput] = useState('')

  const handleAddButton = () => {
    if (nameInput) {
      ListDispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      })
      setNameInput('')
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }

  const deletePerson = (id: string) => {
    ListDispatch({
      type: 'DEL',
      payload: { id }
    })
  }

  const handleOrderButton = () => {
    ListDispatch({
      type: 'ORDER'
    })
  }

  return (
    <div>
      <input type="text" value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Adicionar</button>
      <hr />

      <button onClick={handleOrderButton}>Ordenar</button>
      <br />

      Lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}
            <button onClick={() => deletePerson(item.id)}>Deletar</button>
          </li>

        ))}
      </ul>
    </div >
  )
}

export default App;
