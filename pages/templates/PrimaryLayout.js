import Head from "next/head"
import React from "react"
const MainLayout = ({head , content , navs }) => {
   let navComps =  MainLayout.returnNavs(navs)
    return (
        <div>
            <Head>
                {head}
            </Head>
            <div className="content">
                {content}
            </div>
            <div className="navbar">
                <ul>
                    {navComps}
                </ul>
            </div>
            <div className="info">
                <p>hello</p>
            </div>
        </div>
    )
}
MainLayout.returnNavs = function (navs ) {
    let navComps = []
    for (let i = 0 ; i < navs.length; i++) {
        
        navComps.push(<li className="bars" key = {i}>{navs[i]}</li>)
    }
    
    return navComps    
}

export default MainLayout