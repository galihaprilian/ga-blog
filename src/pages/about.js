import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"

const AboutPage = (props) => {
    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About me" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i>I’ve worked in various industries, especially financial and energy. My languages of choice are Python and JavaScript.</i></p>
                        <br />
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default AboutPage

