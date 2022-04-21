import Head from "next/head"
import React from "react"
import Link from "next/link"
const MainLayout = ({head , headings , content , navs }) => {
   let navComps =  returnNavs(navs)
    return (
        <div>
            <Head>
                {head}
            </Head>
            <div className="headings-wrap">
                {headings}
            </div>
            <div className="navbar">
                <ul id="nav-ul">
                    {navComps}
                </ul>
            </div>
            <div className="content">
                {content}
            </div>
            <br/>
            <br/>
            <br/>
            <div className="info">
                <p>hello</p>
            </div>
        </div>
    )
}
let returnNavs = function (navs) {
    let navComps = []
    for (let i = 0 ; i < navs.length; i++) {
        
        navComps.push(<li className="bars" key = {i}><Link href={navs[i]["href"]}><a>{navs[i]["content"]}</a></Link></li>)
    }
    
    return navComps    
}

export default MainLayout