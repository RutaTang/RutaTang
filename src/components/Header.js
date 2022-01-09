import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header(){
    return (
        <header className={styles.header}>
            <div>
                <span className={styles.icon}>Ruta</span>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Introduction</Link></li>
                        <li><Link to="/current-work">Current Work</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li>Researches</li>
                        <li>Contact Me</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
