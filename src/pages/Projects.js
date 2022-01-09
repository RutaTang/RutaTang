import styles from './Projects.module.css'

function Projects() {
    return (
        <div className={styles.projects}>
            {/*  Categories  */}
            <div>
                <ul className={styles.ul}>
                    <li className={styles.active}>
                        Software
                    </li>
                    <li>BlockChain</li>
                    <li>Data Analysis</li>
                    <li>Songs</li>
                </ul>
            </div>
            {/*  Card List  */}
            <div style={{width: "50%",margin:"auto",display:"grid",gridTemplateColumns:"100px 100px 100px",gridTemplateRows:"100px 100px 100px"}}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
}

export default Projects;