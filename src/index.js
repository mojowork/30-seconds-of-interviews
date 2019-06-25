
import { app, h } from "hyperapp"
// 组件
import BackToTopButton from "./components/BackToTopButton"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Questions from "./components/Questions"
import Footer from "./components/Footer"

// 样式
import "./styles/index.scss"

// 注册
app({
  init: {},
  view: state => (
    <div>
      {/* <BackToTopButton /> */}
      <Header />
      {/* <Filter /> */}
      {/* <Questions /> */}
      {/* <Footer /> */}
    </div>
  ),
  node: document.getElementById("app")
})