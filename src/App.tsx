import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"

import { conf } from './conf'
import { Login, Register, Dashboard } from "@/components"
import { ThemeProvider } from "@/components/theme-provider"


if (!conf.clerkPublishableKey)
  throw new Error("Missing Clerk Publishable Key")


function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <Router>
        <ClerkProvider publishableKey={conf.clerkPublishableKey}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SignedIn>
                    <Dashboard />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </ClerkProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
