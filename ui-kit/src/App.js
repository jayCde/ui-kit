import './styles/home.css'
import classNames from 'classnames';
import {BiPackage} from 'react-icons/bi'
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="container">
      <head>
        <title>Push Insights U.I - Kit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </head>

      <main className="main">
        <div className="grid">
          <Link to="/kit" 
            className={classNames({"link_default_large":true, "linkPrimary": true})}
            style={{borderRadius: "45px"}} id="button-primary-h">
                U.I Kit
                <span className="icon">
                  <BiPackage/>
                </span>
          </Link>
         <footer className="footer">
          <a href="https://jayCde.com">Powered by {" "} {" "}<span >jayCde</span></a>
          <Link to="credits">Credits</Link>
          </footer>
        </div>
      </main>
    </div>
  )
}
