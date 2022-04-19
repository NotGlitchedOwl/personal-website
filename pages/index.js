import MainLayout from "./templates/PrimaryLayout.js"
const Index = () => {
  return (
    <div>
      <MainLayout head={<title>Saptak De - Personal Portfolio</title>}
                  content={(
                    <div>
                      <h1>Saptak`s Personal Website</h1>
                    </div>

                  )}
      />
    </div>
  )
}
export default Index