import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import HomeLayout from './layouts/HomeLayout'

function App() {
  return (
    <Router>
      <div className="MyApp">
        {/* public route */}
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout: React.ComponentType<any> = HomeLayout
            if (route.layout) {
              Layout = route.layout
            }

            const Page = route.element

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
        {/* private route */}
      </div>
    </Router>
  )
}

export default App
