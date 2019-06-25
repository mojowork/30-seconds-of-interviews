import { h, app } from 'hyperapp'
export const state = () => ({ Reset: 99})

export const actions = () => ({
  // Decrement: state => state - 1,
  // Increment: state => state + 1
})

export const view =  state => (
  <div>
    <h1>{state}</h1>
    {/* <button onclick={Reset}>Reset</button> */}
    {/* <button onclick={Decrement} disabled={state === 0}>-</button>
    <button onclick={Increment}>+</button> */}
  </div>
)