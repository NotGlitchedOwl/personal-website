import MainLayout , {classes}   from "./templates/PrimaryLayout.js"
import IndexJson from "./index-info.json"
import Image from "next/image"
import indexStyles from "./../styles/Index.module.css"
import { classPlacement } from "./api/utillities.js"

const Index = () => {
  let indexComps = indexDivs(IndexJson)  
  return (
    <div>
      <MainLayout head={<title>Saptak De - Personal Portfolio</title>}
                  headings={(
                    <>
                      <div className="headings">

                          <h1 className={classPlacement(indexStyles , "title" , classes , false)}>Saptak`s Personal Website</h1>
                          <h2 className={classPlacement(indexStyles , "sub_title" , classes , false)}>Hello World!</h2>
                            
                      </div>
                    </>
                  
                  )}
                  content = {(
                    <div>
                       {indexComps} 
                    </div>
                  )}
                  navs={[{"href": "/#" , "content" : "About Myself"} , {"href" : "/#" , "content" : "My Hobbies"} , {"href" : "/#" , "content" : "Blog Posts"} , 
                          {"href" : "/#" , "content" : "Stuff I Will Add Later"}  ]}
                  
                  darkModeFile={"index.js"}  
      />
    </div>
  )

}

function indexDivs(json) {
  let indexDivComps = []
  const JSON_FILE = JSON.parse(JSON.stringify(json))
  let jsonKeys = Object.keys(JSON_FILE[0])
  for (let i=0; i < jsonKeys.length; i++ ) {
    if (JSON_FILE[0][jsonKeys[i]]["has-image"]) {
      indexDivComps.push(
        <div key = {Math.floor(Math.random() * 1000000)} className="index-cont-wrapper">  
          <h1 className={classPlacement(indexStyles , "index-page-headings" , classes , false)} key={Math.floor(Math.random() * 1000000)}>{(i+1) + "." + jsonKeys[i]}</h1>
          <div className={classPlacement(indexStyles , "index-page-boxes" , classes , false)} key={Math.floor(Math.random() * 1000000)}>
            <p key={Math.floor(Math.random() * 1000000)}>
              {JSON_FILE[0][jsonKeys[i]]["content"]}
            </p>
            <Image src={JSON_FILE[0][jsonKeys[i]]["img-href"]} alt={JSON_FILE[0][jsonKeys[i]]["img-alt"]} width={400} height={400} />  
          </div>
        </div>  
        )  
    } else {
      indexDivComps.push(
        <div key = {Math.floor(Math.random() * 1000000)} className="index-cont-wrapper">  
          <h1 className={classPlacement(indexStyles , "index-page-headings" , classes , false)} key={Math.floor(Math.random() * 1000000)}>{(i+1) + "." + jsonKeys[i]}</h1>
          <div className={classPlacement(indexStyles , "index-page-boxes" , classes , false)} key={Math.floor(Math.random() * 1000000)}>
            <p key={Math.floor(Math.random() * 1000000)}>
              {JSON_FILE[0][jsonKeys[i]]["content"]}
            </p>
          </div>
        </div>  
        )  
    }
    
  }

  return indexDivComps

}

export default Index