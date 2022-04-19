import Head from "next/head"

const MainLayout = ({head , content}) => {
    return (
        <div>
            <Head>
                {head}
            </Head>
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