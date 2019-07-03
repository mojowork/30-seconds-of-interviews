import { h } from "hyperapp"

const RecommendedResource = () => (
  <li class="Question-wrapper is-visible">
    <div class={"Question__badge"}>资源推荐</div>
    <div class="Question">
      <h2>
        <a href="https://www.yuque.com/ysfe/ykx/fedhb">
          前端开发手册
        </a>
      </h2>
      <p>
        这是一本每个人都可以用来学习前端开发实践的指南。
        它大致总结和讨论了前端工程的实践：
        如何学习它以及在2019年实践它时会使用到的工具。
      </p>
    </div>
  </li>
)

export default RecommendedResource
