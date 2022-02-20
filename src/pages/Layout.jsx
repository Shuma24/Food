import {Link, Outlet, NavLink} from 'react-router-dom'

function Layout () {
   
   return (
      <div className='wrapper'>
         <header>
            <nav>
               <div className="nav-wrapper blue lighten-1">
                  <Link to="/" className="brand-logo">FOODS</Link>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/About">About</NavLink></li>
                  <li><NavLink to="/Contacts">Contacts</NavLink></li>
                  </ul>
               </div>
            </nav>
         </header>
         <main className='main'>
            <div className="main__container">
               <Outlet />
            </div>
         </main>
         <footer className="page-footer blue lighten-1 footer">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} By Shuma
            </div>
          </div>
        </footer>
      </div>
   )
}

export { Layout }