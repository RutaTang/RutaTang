import styles from './App.module.css';
import colors from './color.module.css'

function App() {
    return (
        <div className={styles.app}>
            <header>
                <div>
                    <span className={styles.icon}>Ruta</span>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>Introduction</li>
                            <li>Current Work</li>
                            <li>Project</li>
                            <li>Research</li>
                            <li>Contact Me</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main style={{marginBottom:200}}>
                {/*Contact me*/}
                <div className={styles.contact_me}>
                    <ul>
                        <li>
                            <a href="https://github.com/RutaTang">
                                <svg t="1640596360142" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="2155" width="30" height="30">
                                    <path
                                        d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                                        p-id="2156"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href={process.env.PUBLIC_URL + "/wechat.png"}>
                                <svg t="1640596472910" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="2952" width="30" height="30">
                                    <path
                                        d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z"
                                        p-id="2953"></path>
                                    <path
                                        d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z"
                                        p-id="2954"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                {/*Section 0 - Brief*/}
                <section className={styles.brief_section}>
                    <p style={{margin: 0, marginBottom: 20}}>Hi, I am <span style={{fontSize: 30, fontWeight: "bold"}}
                                                                            className={colors.color_blue}>Ruta</span>,
                        also call me</p>
                    <p style={{margin: 0, marginBottom: 20, fontSize: 60, fontWeight: "bolder"}}>WeiZhi Tang</p>
                    <p style={{margin: 0, fontSize: 40, fontWeight: "bolder", opacity: 0.7}}>A Software and Blockchain
                        Developer | Data Analyzer | Machine Learning Learner | Finance Lover | Song Writer</p>
                </section>
                {/*Section 1 - About me*/}
                <section className={styles.about_me_section}>
                    <p  style={{margin: 0, marginBottom: 10, fontSize: 30, fontWeight: "bolder"}}>
                        About me
                    </p>
                    <div style={{display: "flex"}}>
                        <p style={{lineHeight:2}}>
                            I am now pursuing my Master's Degree on Data Science and Machine Learning
                            at the National University of Singapore.
                            I spend most of time on Machine Learning, Deep Learning, Software Development, Finance, and definitely Blockchain.
                            If you are also interested in these kinds of topic, please give us a chance to have a talk and keep in touch.
                            My contact info is listed at the bottom left of the web. Either Github or Wechat is ok. Just click it and contact me. I am waiting for your message!
                        </p>
                        <img style={{width: 230, height: 230, marginLeft:30}}
                             src={process.env.PUBLIC_URL+'/profile.jpg'}
                             alt=""/>
                    </div>
                </section>
                {/*Section 2 - Education*/}
                <section className={styles.education_section}>
                    <p  style={{margin: 0, marginBottom: 10, fontSize: 30, fontWeight: "bolder"}}>
                        Education Experience
                    </p>
                    <div>
                        {/*NUS*/}
                        <div style={{marginTop:60,display:"flex"}}>
                            <div style={{width:"100%",marginRight:30}}>
                                <p style={{margin:0,fontSize:20,fontWeight:'bold',color:"gray"}}>National University of Singapore</p>
                                <p style={{margin:0,marginTop:10,fontSize:15}}>08/2021 To 08/2022</p>
                                <p style={{lineHeight:1.5}}>
                                    I am pursuing my Master' Degree on Data Science and Machine Learning here.
                                </p>
                            </div>
                            <img src={process.env.PUBLIC_URL+"/nus_logo.png"} style={{width:300,height:150}} alt=""/>
                        </div>
                        {/*Colorado Boulder*/}
                        <div style={{marginTop:100,display:"flex"}}>
                            <img src={process.env.PUBLIC_URL+"/colorado_logo.png"} style={{width:300,height:150}} alt=""/>
                            <div style={{width:"100%",marginLeft:30}}>
                                <p style={{margin:0,fontSize:20,fontWeight:'bold',color:"gray"}}>University of Colorado At Boulder</p>
                                <p style={{margin:0,marginTop:10,fontSize:15}}>08/2018 To 08/2020</p>
                                <p style={{lineHeight:1.5}}>
                                    I took my undergraduate program here. I was majoring in both Computer Science and Psychology.
                                    As you can see here, it might be weird that duration was only two years. The reason is that I took two academic year, totally six semesters, to accomplish my undergraduate program.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
