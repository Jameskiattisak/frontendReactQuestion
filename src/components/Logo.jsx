import reactLogo from '../assets/react.svg'
import mongoLogo from '/mongo.png'
import '../App.css'

function Logo(){
    return (
        <>
          <div>
            <a href="https://mongodb.com/" target="_blank">
              <img src={mongoLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </>
      )
}

export default Logo