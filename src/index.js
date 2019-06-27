
import { app, h } from "hyperapp"
// 组件
import BackToTopButton from "./components/BackToTopButton"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Questions from "./components/Questions"
import Footer from "./components/Footer"

import questions from "./data/questions.json"
import { scrollToTop } from "./utils"


// 样式
import "./styles/index.scss"

// 注册

const state = {
  questions,
  filter: {
    category: "All",
    expertise: "Junior",
    sortAscending: true,
    dropdown: {
      name: "Category",
      items: [
        {
          name: "All",
          icon: "check"
        },
        {
          name: "HTML",
          icon: "layout"
        },
        {
          name: "CSS",
          icon: "feather"
        },
        {
          name: "JavaScript",
          icon: "code"
        },
        {
          name: "React",
          icon: "globe"
        },
        {
          name: "Node",
          icon: "server"
        },
        {
          name: "Security",
          icon: "shield"
        }
      ]
    }
  }
}

const actions = {
  scrollBackToTop: scrollToTop,
  onAnswerButtonClick: ({ name, isOpen }) => state => ({
    questions: state.questions.map(
      q => (q.name === name ? { ...q, isOpen: !isOpen } : q)
    )
  }),
  filter: {
    onSortDirectionChange: () => state => ({
      sortAscending: !state.sortAscending
    }),
    set: name => ({ category: name })
  }
}

const view = (state, actions) => (
  <div>
    <BackToTopButton />
    <Header />
    <Filter />
    <Questions />
    <Footer />
  </div>
)

app(state, actions, view, document.body)

setTimeout(() => {
  const backToTopButton = document.querySelector(".BackToTopButton")
  addEventListener("scroll", () => {
    backToTopButton.classList[window.scrollY > 750 ? "add" : "remove"](
      "is-visible"
    )
  })
})