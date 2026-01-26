import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/icons/logo1.png'

export default function Navbar({ transparent = false }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isContactPage = location.pathname.toLowerCase() === '/contact'
  // Define checks for other pages where similar navbar styling is desired
  const isProjectDetailsPage = location.pathname.toLowerCase().includes('/projectdetail') || location.pathname.toLowerCase().includes('/project-detail');
  const isPagePage = location.pathname.toLowerCase() === '/page';
  const isMVPPage = location.pathname.toLowerCase() === '/mvp';

  return (
    <>
      {/* ===== FIXED NAVBAR ===== */}
      <header className={`absolute top-0 left-0 w-full z-50 transition-all duration-300`}>
      <nav className={`mx-auto max-w-[1528px] h-[72px] flex items-center justify-between px-10 transition-all duration-300
        ${transparent ? 'bg-white/20 backdrop-blur-sm' : 'bg-white'}
       ${isContactPage || isProjectDetailsPage || isPagePage || isMVPPage
          ? 'bg-white  shadow-[0_5px_20px_rgba(0,0,0,0.15)]'
          : ''
        }
        `}>

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
             {/* Dark Capsule Container for Links */}
            <div className="rounded-2xl px-4 py-2 bg-[#020224] flex items-center gap-8 text-[13px] font-medium shadow-lg border border-[#0B0F5C] hover:border-[#050363] transition-all duration-300">

              <Link to="/About" className="relative group text-white transition-colors duration-300">
                About
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ${location.pathname.toLowerCase() === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <a href="/MVP" className="relative group text-white transition-colors duration-300">
                MVP Development
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ${location.pathname === '/MVP' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
              <Link to="/application" className="relative group text-white transition-colors duration-300">
                Application Development
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ${location.pathname.toLowerCase() === '/application' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link to="/contact" className="relative group text-white transition-colors duration-300">
                Contact Us
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ${isContactPage ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/Splash"
              className="inline-block rounded-full bg-white text-[#0B0F5C] text-sm font-bold px-4 py-1 border border-[#0B0F5C] hover:bg-gray-50 transition shadow-sm"
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
        {/* <Link className="menu-item" to="/page" onClick={() => setOpen(false)}>page</Link> */}
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
