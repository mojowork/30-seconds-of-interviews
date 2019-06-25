
// import { app } from 'hyperapp'

// import './index.scss'

// import { state, actions, view} from "./views/home"

// console.log('home', state, actions, view)

// const $element = document.querySelector('#app') 

// app(state, actions, view, $element)

import { h, app } from "hyperapp"

const targetValue = e => e.target.value

const setItem = (items, id, set) =>
  items.map(item => (item.id === id ? { ...item, ...set(item) } : item))

const newItem = value => ({
  id: Math.random().toString(36),
  isEditing: false,
  lastValue: "",
  value
})

const NewValue = (state, value) => ({ ...state, value })

const Add = state => ({
  ...state,
  value: "",
  items: state.items.concat(newItem(state.value))
})

const Update = (state, { id, value }) => ({
  ...state,
  items: setItem(state.items, id, () => ({ value }))
})

const Cancel = (state, id) => ({
  ...state,
  items: setItem(state.items, id, item => ({
    value: item.lastValue,
    isEditing: false
  }))
})

const Remove = (state, id) => ({
  ...state,
  items: state.items.filter(item => item.id !== id)
})

const ToggleEdit = (state, id) => ({
  ...state,
  items: setItem(state.items, id, item => ({
    lastValue: item.value,
    isEditing: !item.isEditing
  }))
})

const TodoList = props =>
  props.items.map(item =>
    item.isEditing ? (
      <li>
        <input
          type="text"
          value={item.value}
          oninput={[Update, e => ({ id: item.id, value: targetValue(e) })]}
        />
        <button onclick={[Cancel, item.id]}>Cancel</button>
        <button onclick={[Remove, item.id]}>Remove</button>
        <button onclick={[ToggleEdit, item.id]}>Save</button>
      </li>
    ) : (
        <li onclick={[ToggleEdit, item.id]}>{item.value}</li>
      )
  )

app({
  init: {
    value: "",
    items: [newItem("Make a sandwich")]
  },
  view: state => (
    <div>
      <h1>To-Do</h1>
      <TodoList items={state.items} />
      <input
        type="text"
        value={state.value}
        oninput={[NewValue, targetValue]}
      />
      <button onclick={Add}>New Item</button>
    </div>
  ),
  node: document.getElementById("app")
})