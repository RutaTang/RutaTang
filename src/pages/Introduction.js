import styles from "./Introduction.module.css";
import colors from "../color.module.css";


function Introduction() {
    return(
        <main className={styles.main} style={{marginBottom:200}}>
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
    )
}

export default Introduction;