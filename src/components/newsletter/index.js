import React from 'react'
import newsletter from "./index.module.scss"
const Newsletter = () => {
    return (
        <article className={newsletter.container}>
            <header className="col-8">
                <h2 className={newsletter.heading}>Alaye, join our Newsletter</h2>
            </header>
            <div className="col-8">
                <form className="row">
                    <div className="col-5">
                        <input className={newsletter.input} type="text" placeholder="Your Full Name"/>
                    </div>
                    <div className="col-5">
                        <input className={newsletter.input} type="text" placeholder="Your Email Address" />
                    </div>
                    <div className="col-2">
                        <input type="submit" className={newsletter.button} value="SUBSCRIBE" />
                    </div>
                </form>
            </div>
        </article>
    )
}

export default Newsletter