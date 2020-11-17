import React from 'react'
import {Link} from 'gatsby'

const PostPreview  = () => {
    return (
        <article className="post-preview">
            <Link to="#"><h2>Build a blog with Gatsby, Contentful and MailChimp - Part 1 (Frontend)</h2></Link>
            In this tutorial, I will show you how you can quickly setup a blog with Gatsby for the frontend, Contenful as your data source (or backend if you may) and MailChimp for newsletter subscriptions. Talk is cheap, let's get into it.
        </article>
    )
}

export default PostPreview