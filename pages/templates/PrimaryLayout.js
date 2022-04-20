import Head from "next/head"
import Image from "next/image"

const MainLayout = ({head , content}) => {
    return (
        <div>
            <Head>
                {head}
            </Head>
            <div className="navbar">
                
            </div>
            <div className="content">
                {content}
            </div>
            <div className="info">
                <p>hello</p>
            </div>
        </div>
    )
}
export default MainLayout