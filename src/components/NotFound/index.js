import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div
            className={
              isDarkTheme
                ? 'not-found-container dark-bg'
                : 'not-found-container'
            }
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-img"
              alt="not found"
            />
            <h1
              className={isDarkTheme ? 'notfound-head dark' : 'notfound-head'}
            >
              Lost Your Way ?
            </h1>
            <p className={isDarkTheme ? 'notfound-desc dark' : 'notfound-desc'}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
