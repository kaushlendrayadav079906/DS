import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/Logo_name.png'

export default function Navbar({ transparent = false }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ===== FIXED NAVBAR ===== */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
        <nav className={`mx-auto max-w-[1728px] h-[134px] flex items-center justify-between px-10 transition-all duration-300 
          ${transparent 
            ? 'bg-transparent border-none shadow-none' 
            : 'bg-[linear-gradient(to_bottom,#ffffff_50%,transparent_50%)] border-b border-[#9CA1CD]'
          }`}>

          {/* Logo */}
          <div className="flex items-center gap-3">
          <img
  src={logo}
  alt="DatenStrom-3AG Solutions Logo"
  className="h-[48px] w-auto sm:h-[52px] md:h-[56px]"
/>

           
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="rounded-full px-8 py-3 bg-[#0B0F5C] text-white shadow-lg flex items-center gap-8 text-sm font-medium">
              <Link to="/About" className="hover:text-gray-200 transition">About</Link>
              <a href="/MVP" className="hover:text-gray-200 transition">MVP Development</a>
              <Link to="/application" className="hover:text-gray-200 transition">Application Development</Link>
              <Link to="/contact" className="hover:text-gray-200 transition">Contact Us</Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/Splash"
              className="inline-block rounded-full bg-white text-[#0B0F5C] text-sm font-bold px-6 py-2 border border-[#0B0F5C] hover:bg-gray-50 transition shadow-sm"
            >
              Start Your Project
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl font-bold text-[#0B0F5C]"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

        <Link className="menu-item" to="/About" onClick={() => setOpen(false)}>About</Link>
        <Link className="menu-item" to="/page" onClick={() => setOpen(false)}>page</Link>
        <a className="menu-item" href="/MVP" onClick={() => setOpen(false)}>MVP Development</a>
        <Link className="menu-item" to="/application" onClick={() => setOpen(false)}>
          Application Development
        </Link>
        <Link className="menu-item" to="/contact" onClick={() => setOpen(false)}>
          Contact Us
        </Link>
      </div>

      {/* ===== MOBILE STYLES ===== */}
      <style>
        {`
        .mobile-menu {
          position: fixed;
          top: 0;
          left: -100%;
          width: 75%;
          height: 100vh;
          background: #ffffff;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          font-size: 1.1rem;
          font-weight: 600;
          transition: left 0.3s ease;
          z-index: 60;
          box-shadow: 4px 0 20px rgba(0,0,0,0.2);
        }

        .mobile-menu.open {
          left: 0;
        }

        .close-btn {
          align-self: flex-end;
          font-size: 2rem;
          margin-bottom: 1rem;
          background: none;
          border: none;
        }

        .menu-item {
          background: linear-gradient(135deg, #4338ca, #6366f1);
          color: white;
          padding: 0.9rem 1.2rem;
          border-radius: 0.75rem;
          text-align: left;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .menu-item:hover {
          background: linear-gradient(135deg, #3730a3, #4f46e5);
          transform: translateX(4px);
        }

        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }
        `}
      </style>
    </>
  )
}
