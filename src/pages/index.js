import React from "react"
import "./main.scss"

import PostPreview from "../components/postPreview"
import Header from "../components/header"
import Newsletter from "../components/newsletter"

import SEO from "../components/seo"
import Footer from "../components/footer"

const IndexPage = () => (
  <main>
    <SEO title="Home" />
    <div className="wrapper">
    <Header/>
    <PostPreview />
    <Newsletter />

    </div>
    <Footer />
  </main>
)

export default IndexPage
