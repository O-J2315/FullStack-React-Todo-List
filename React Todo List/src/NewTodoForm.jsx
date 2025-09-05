import {useState} from 'react'

export function NewTodoForm({onSubmit}) {

    const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return
    
    onSubmit(newItem)
  
  setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input name="item" 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            id="item" 
            type="text" />
      </div>
      <button className="btn">Add</button>
    </form>
  )

}