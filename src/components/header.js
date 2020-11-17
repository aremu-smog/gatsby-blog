import React from "react"
import Badge from "../images/Badge.svg"
const Header = () => (
  <header className="row main-header row-center">
      <div className="col-8">
          <h1 className="outline-text">Gatsby x Contentful x Mailchimp Blog</h1>
          <nav>
              <a href="#">READ ARTICLE</a>
              <a href="#">VIEW CODE</a>
              <a href="#">WATCH VIDEO</a>
          </nav>
      </div>
      <div className="col-4 text-right"><img src={Badge} alt="Badge" /></div>
  </header>
)


export default Header
