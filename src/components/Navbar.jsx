import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/Logo-removebg-preview.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ===== FIXED NAVBAR ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-indigo-100">
        <nav className="mx-auto max-w-[1400px] h-[72px] flex items-center justify-between px-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-9 h-9 rounded" />
           <span className="text-[#414141] font-bold text-[26px] leading-[1] tracking-tight">
                    DatenStrom-3AG Solutions
                  </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="rounded-full px-6 py-2 bg-[#0B0F5C] text-white shadow flex items-center gap-6 text-sm font-medium">
              <a href="#about" className="hover:opacity-80">About</a>
              <a href="#mvp" className="hover:opacity-80">MVP Development</a>
              <Link to="/application" className="hover:opacity-80">Application Development</Link>
              <Link to="/contact" className="hover:opacity-80">Contact Us</Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/application"
              className="inline-block rounded-full bg-white text-[#0B0F5C] text-sm font-semibold px-5 py-2 border border-indigo-200 hover:bg-indigo-50 transition"
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

        <a className="menu-item" href="#about" onClick={() => setOpen(false)}>About</a>
        <a className="menu-item" href="#mvp" onClick={() => setOpen(false)}>MVP Development</a>
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
