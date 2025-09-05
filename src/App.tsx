
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { PublicLayout } from "./layouts/public-layout"
import AuthenctionLayout from "./layouts/auth-layout"

import HomePage from "./routes/home"
import SignInPage from "./routes/sign-in"
import SignUpPage from "./routes/sign-up"
import ProtectRoutes from "./layouts/protected-routes"
import { MainLayout } from "./layouts/main-layout"
import { Generate } from "./components/generate"
import { Dashboard } from "./routes/dashboard"
import { MockInterviewPage } from "./routes/mock-interview-page";
import { CreateEditPage } from "./routes/create-edit-page"
import { MockLoadPage } from "./routes/mock-load-page";
import { Feedback } from "./routes/feedback"
import AboutPage from "./routes/about-us"
import ServicesPage from "./routes/services"
import ContactPage from "./routes/contact-us"




const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
           <Route path="/about" element={<AboutPage/>} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        {/*authentication layout */}
        <Route element={<AuthenctionLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>
        {/*protected routes */}
        <Route element={<ProtectRoutes><MainLayout /></ProtectRoutes>}>
          {/*add all the proctected routes*/}
           {/* add all the protect routes */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>

  )
}

export default App
