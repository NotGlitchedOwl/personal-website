import MainLayout from "./templates/PrimaryLayout.js"
const Index = () => {
  return (
    <div>
      <MainLayout head={<title>Saptak De - Personal Portfolio</title>}
                  content={(
                    <div>
                      <div className="headings">

                          <h1>Saptak`s Personal Website</h1>
                          <h2 id="short-desc">Hello World!</h2>
                            
                      </div>
                    </div>

                  )}
      />
    </div>
  )
}
export default Index