import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import ButtonPage from "./pages/ButtonPage"
import AvatarPage from "./pages/AvatarPage"
import CardPage from "./pages/CardPage"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-12">
      <h1 className="text-4xl font-bold">Welcome to shadcn/ui components</h1>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        Use the navigation above to browse through the installed shadcn/ui components
        (Button, Avatar, and Card) on their separate pages.
      </p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navigation />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="/card" element={<CardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
