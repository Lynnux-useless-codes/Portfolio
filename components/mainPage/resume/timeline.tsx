import styles from "@/styles/timeline.module.css"
import Image from "next/image";
import Tooltip from '@/components/tooltip';

export default function Timeline() {
    return (
        <section className={styles.timeline}>
            <div className={styles.uwu}>
                <div className={styles.titlewrapper}>
                    <div className="icon-box">
                        <Image draggable="false" src="/assets/svg/book-Outline.svg" alt="Book icon" width={25} height={25}/>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className={styles.timelinelist}>
                    <li className={styles.timelineitem}>
                        <h4 className={`h4 ${styles.timelineitemtitle}`}>Self-Educated developer</h4>
                        <span>2019 — Present</span>
                        <p className={styles.timelinetext}>I have used online resources such as tutorials, coding communities, and personal projects to learn the skills I need for my projects.</p>
                    </li>
                    <li className={styles.timelineitem}>
                        <h4 className={`h4 ${styles.timelineitemtitle}`}>Self-Educated Artist</h4>
                        <span>2021 — 2024</span>
                        <p className={styles.timelinetext}>I have used online resources such as tutorials, art communities, and personal projects to learn the skills I need for my art.</p>
                    </li>
                </ol>
            </div>
            <div className={styles.uwu}>
                <div className={styles.titlewrapper}>
                    <div className="icon-box">
                        <Image draggable="false" src="/assets/svg/star.svg" alt="Book icon" width={25} height={25}/>
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className={styles.timelinelist}>
                    <li className={styles.timelineitem}>
                        <h4 className={`h4 ${styles.timelineitemtitle}`}>Development Experience</h4>
                        <span>2019 — Present</span>
                        <p className={styles.timelinetext}>I don't have any professional experience in the developing industry.</p>
                    </li>
                    <li className={styles.timelineitem}>
                        <h4 className={`h4 ${styles.timelineitemtitle}`}>Chibi Twitch Emote Experience</h4>
                        <span>2023 — 2024</span>
                        <p className={styles.timelinetext}>I create some chibi emoji's related to a video games i was playing at that time.</p>
                    </li>
                </ol>
            </div>
            <div>
                <div className={styles.titlewrapper}>
                    <div className="icon-box">
                        <Image draggable="false" src="/assets/svg/diploma.svg" alt="Book icon" width={25} height={25}/>
                    </div>
                    <h3 className="h3">Diplomas</h3>
                </div>
                <ol className={styles.timelinelist}>
                    {/* Linux */}
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> Linux ~ Certification</h4>
                        </div>
                        <span>Jul 2024 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Linux Course</b>, gaining comprehensive knowledge of Linux operating systems and their distributions. The course covered file management, directory structures, permissions, environment variables, and advanced concepts like pipes and filters. This certification highlights my ability to navigate and manage Linux environments effectively, comparing them with Windows systems.</p>
                    </li>
                    {/* Next.JS */}
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> Next.JS ~ Certification</h4>
                        </div>
                        <span>Jun 2024 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Next.JS Course</b>, acquiring a solid foundation in this React-based framework. The course covered creating Next.js applications from scratch, testing, dynamic routing, prefetching, and deployment. This certification demonstrates my proficiency in building and deploying efficient, server-side rendered and static websites using Next.js.</p>
                    </li>
                    {/* Css
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> CSS ~ Certification</h4>
                        </div>
                        <span>Dec 2023 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">CSS Course</b>, mastering advanced styling techniques for web design. This certification highlights my expertise in creating visually appealing and responsive layouts, enhancing user experience through effective CSS styling.</p>
                    </li> */}
                    {/* Python */}
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> Python ~ Certification</h4>
                        </div>
                        <span>Aug 2023 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Python Certification Course</b>, including data structures, algorithms, and application development. This certification demonstrates my proficiency in writing efficient code and solving common problems using Python.</p>
                    </li>
                    {/* It Basics */}
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> IT Basic ~ Certification</h4>
                        </div>
                        <span>Jun 2023 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">IT Basics Certification Course</b>, gaining foundational knowledge in key IT concepts, including hardware, software, networking, and troubleshooting. This certification highlights my ability to support and manage basic IT systems and infrastructure effectively.</p>
                    </li>
                    {/* Social Media Marketing
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> Social Media Marketing ~ Certification</h4>
                        </div>
                        <span>Jun 2023 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Social Media Marketing Certification Course</b>, acquiring in-depth knowledge in social media strategy, content creation, and performance analytics. This certification highlights my ability to effectively utilize social media platforms to drive engagement and achieve marketing goals.</p>
                    </li> */}
                    {/* Artificial Intelligence
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}>Artificial Intelligence ~ Certification</h4>
                        </div>
                        <span>Apr 2021 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Artificial Intelligence Course</b>, acquiring a strong foundation in AI techniques such as machine learning, neural networks, and data analysis. This certification underscores my ability to apply AI concepts to develop intelligent systems and solve complex problems.</p>
                    </li> */}
                    {/* Advanced Hacking
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}>Advanced Hacking ~ Certification</h4>
                        </div>
                        <span>May 2021 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Advanced Hacking Course</b>, delving into advanced hacking techniques and ethical hacking practices. The course covered a range of topics including password cracking, maintaining anonymity, secret communication methods, and XSS. This certification demonstrates proficiency in sophisticated hacking skills and their application in real-world scenarios.</p>
                    </li> */}
                    {/* Cyber Security
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> Cyber Security ~ Certification</h4>
                        </div>
                        <span>Jul 2021 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Cyber Security Certification Course</b>, developing a thorough understanding of cybersecurity principles, threat analysis, and protective measures. This certification highlights my capability to safeguard systems and data against a wide range of cyber threats and vulnerabilities.</p>
                    </li> */}
                    {/* Ethical Hacking
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> Ethical Hacking ~ Certification</h4>
                        </div>
                        <span>Jun 2021 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Ethical Hacking Certification Course</b>, acquiring expertise in ethical hacking techniques, vulnerability assessment, and cybersecurity best practices. This certification demonstrates my ability to identify and address security vulnerabilities to protect systems and data.</p>
                    </li> */}
                    {/* Cryptography
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> Cryptography ~ Certification</h4>
                        </div>
                        <span>May 2021 | Online Course</span>
                        <p className={styles.timelinetext}>Completed the <b className="bold">Cryptography Certification Course</b>, gaining expertise in cryptographic algorithms, encryption techniques, and secure communication practices. This certification highlights my ability to implement robust security measures and protect sensitive information from unauthorized access.</p>
                    </li> */}
                    {/* Fundamentals
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}>Fundamentals ~ Certification</h4>
                        </div>
                        <span>Feb 2021 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Fundamentals Course</b>, covering essential topics such as computer communication, instruction execution, decision-making processes, and common programming pitfalls. This certification demonstrates a solid understanding of fundamental programming concepts and the foundational principles of computer science.</p>
                    </li> */}
                    {/* Javascript */}
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}>Javascript ~ Certification</h4>
                        </div>
                        <span>Sep 2020 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Javascript Course</b>, gaining in-depth knowledge of core JavaScript concepts, including DOM manipulation, event handling, and asynchronous programming. This certification demonstrates my ability to enhance web interactivity and functionality with robust JavaScript solutions.</p>
                    </li>
                    {/* Website Building */}
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> Website Building ~ Certification</h4>
                        </div>
                        <span>Jun 2020 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">Website Building Certification Course</b>, gaining hands-on experience in designing and developing websites. This certification showcases my skills in web design, layout creation, and site functionality, emphasizing my ability to build user-friendly and responsive web pages.</p>
                    </li>
                    {/* Html
                    <li className={styles.timelineitem}>
                        <div className={`flex ${styles.flex}`}>
                            <Tooltip text="info" tooltip="Recognized by Google Developers Program, though not formally accredited." size={17} />
                            <h4 className={`h4 ${styles.timelineitemtitle}`}> HTML ~ Certification</h4>
                        </div>
                        <span>Apr 2020 | Online Course</span>
                        <p className={styles.timelinetext}>Successfully completed the <b className="bold">HTML Certification Course</b>, acquiring a solid understanding of HTML fundamentals, including elements, attributes, and page structure. This certification underscores my ability to create and optimize web pages, ensuring effective and semantic web development.</p>
                    </li> */}
                </ol>
            </div>
        </section>
    );
}

