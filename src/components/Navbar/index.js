import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <div className={isDarkTheme ? 'nav-dark-bg' : 'nav-light-bg'}>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
            className="logo-img"
          />
          <ul className="nav">
            <Link to="/" className="dec">
              <li className={isDarkTheme ? 'nav-link dark' : 'nav-link'}>
                Home
              </li>
            </Link>
            <Link to="/about" className="dec">
              <li className={isDarkTheme ? 'nav-link dark' : 'nav-link'}>
                About
              </li>
            </Link>
          </ul>
          <button
            className="button"
            type="button"
            data-testid="theme"
            onClick={changeTheme}
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme logo"
              className="theme-logo"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
