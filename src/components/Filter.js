import { h } from "hyperapp"
import Dropdown from "./Dropdown"
import SortButton from "./SortButton"

export default () => state => (
  <div class="Filter">
    <div class="container">
      <SortButton />
      <Dropdown {...state.filter.dropdown} />
    </div>
  </div>
)
