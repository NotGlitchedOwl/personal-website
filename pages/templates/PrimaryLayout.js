import Head from "next/head"
import React , {Component , useState} from "react"
import {retriveClass , themeJson , classPlacement} from "../api/utillities.js"
import Link from "next/link"
import themesFile from "../themes.json"
import globalStyle from "../../styles/Global.module.css"
import { useRouter } from "next/router"

export let classes = [themesFile[0]["global"]["dark"]["classes"] , themesFile[0]["index.js"]["dark"]["classes"]]
const MainLayout = ({head , headings , content , navs  }) => {
    const router = useRouter()
    const refreshData = () => router.replace(router.asPath)
    const [theme , changeTheme] = useState("dark")
    return (
        <div className={classPlacement(globalStyle , "bg" , classes , true)}>
            <Head>
                {head}
            </Head>
            <div className="headings-wrap">
                {headings}
                <button className="theme_changer" onClick={() => {
                    if (theme == "dark") {
                        changeTheme("light")
                        
                        
                                               
                        
                    } else {
                        changeTheme("dark")
                            
                        
                    }
                    classes[0] = themesFile[0]["global"][theme]["classes"]        
                    classes[1] = themeJson(themesFile , theme , "index.js")
                    refreshData()

                }}>Change Theme</button>
            </div>
            <div className={globalStyle.navbar}>
                <ul id={globalStyle.nav_ul}>
                    {returnNavs(navs)}
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

MainLayout.getInitialProps = ({query}) => {
    return {
        classes
    }
}
let returnNavs = function (navs) {
    let navComps = []
    for (let i = 0 ; i < navs.length; i++) {
         navComps.push(<li className={globalStyle[retriveClass("nav_bars" , classes , true)]} key = {i}><Link href={navs[i]["href"]}><a>{navs[i]["content"]}</a></Link></li>)
    }
      return navComps  
}





export default MainLayout
