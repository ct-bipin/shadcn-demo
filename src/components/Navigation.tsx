import { NavLink } from "react-router-dom"

export default function Navigation() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
      isActive ? "bg-accent text-accent-foreground" : "text-foreground"
    }`

  return (
    <nav className="flex justify-center space-x-4 p-4 border-b">
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/button" className={linkClass}>Button</NavLink>
      <NavLink to="/avatar" className={linkClass}>Avatar</NavLink>
      <NavLink to="/card" className={linkClass}>Card</NavLink>
    </nav>
  )
}
