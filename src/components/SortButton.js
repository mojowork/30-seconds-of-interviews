import { h } from "hyperapp"
import { cc } from "../utils"
import Icon from "./Icon"

export default () => (state, actions) => (
  <div class="Dropdown">
    <div>
      <label class="Dropdown__label">排序</label>
    </div>
    <button
      class="btn Dropdown__button"
      onclick={() => actions.filter.onSortDirectionChange()}
      data-tooltip={`我是${
        state.filter.sortAscending ? "菜鸟" : "高手"
      }`}
    >
      <span>Expertise</span>
      <i
        class={cc("Dropdown__button-icon", {
          "is-rotated": state.filter.sortAscending
        })}
      >
        <Icon class="btn__icon" name="arrow-down" />
      </i>
    </button>
  </div>
)
