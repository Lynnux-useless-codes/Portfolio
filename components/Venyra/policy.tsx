import style from "@/styles/imageofcode.module.css"

export default function Terms() {
  return (
    <article className="terms active">
      <section className={style.content}>
        <h2 id="introduction">Privacy Policy for Venyra Bot</h2>
        <p className={style.text}>Last Updated: Jan 14, 2025</p>
        <p className={style.text}>
          Your privacy is important to us. This Privacy Policy outlines the information Venyra collects, how it is used, and your rights regarding that data. By using Venyra, you agree to the terms outlined below.
        </p>
        <h2 id="whattodonext">1. Information We Collect</h2>
        <p className={style.text}>
          Venyra collects only the data necessary to provide its core features and improve user experience. This includes:
        </p>
        <h4>1.1 User Data</h4>
        <ul>
          <li>- User IDs: To track individual leveling progress and activity.</li>
          <li>- Activity Metrics: Such as messages sent or other engagement data relevant to leveling.</li>
        </ul><br/>
        <h4>1.2 Server Data</h4>
        <ul>
          <li>- Server IDs: To associate user activity with specific servers and calculate server-level progression.</li>
          <li>- Channel IDs: For determining where bot commands or activity tracking occurs.</li>
        </ul><br/>
        <h4>1.3 Optional Data</h4>
        <ul>
          <li>- Data submitted through bot commands (e.g., settings, preferences) as chosen by server admins or users..</li>
        </ul> <br/><br/>
        <h2 id="whattodonext">2. How We Use Your Information</h2>
        <p className={style.text}>The data collected by Venyra is used for the following purposes:</p>
        <ul>
          <li style={{display: "inline"}}>1. <b>Global Leveling System:</b> To calculate and display user and server progression.</li> <br/>
          <li style={{display: "inline"}}>2. <b>Server Engagement:</b> To provide insights and rewards based on server activity.</li> <br/>
          <li>3. <b>Feature Improvements:</b> To enhance Venyra’s performance and introduce new functionalities.</li>
        </ul><br/>
        <h2 id="whattodonext">3. Data Retention</h2>
        <p className={style.text}>The data collected by Venyra is used for the following purposes:</p>
        <ul>
          <li style={{display: "inline"}}>1. User and server data are retained only as long as necessary to provide Venyra’s features.</li> <br/>
          <li>2. Inactive servers or users may have their data automatically deleted after a defined period (e.g., 6 months of inactivity).</li> <br/>
        </ul><br/>
        <h2 id="whattodonext">4. Data Sharing</h2>
        <p className={style.text}>Venyra does not sell, trade, or share your data with third parties. Data is only accessible by:</p>
        <ul>
          <li style={{display: "inline"}}>1. <b>The Bot Developer:</b> For maintenance, debugging, or implementing updates.</li> <br/>
          <li>2. <b>Server Administrators:</b> For managing their specific server settings (limited to their server’s data).</li> <br/>
        </ul><br/>
        <h2 id="whattodonext">5. Data Security</h2>
        <p className={style.text}>We take reasonable measures to secure your data, including:</p>
        <ul>
          <li style={{display: "inline"}}>1. Encryption of stored data where applicable.</li> <br/>
          <li>2. Regular updates to ensure the bot remains secure against vulnerabilities.</li> <br/>
        </ul>
        <p className={style.text}>While we strive to protect your data, no system is 100% secure. Use Venyra at your own risk.</p><br/>
        <h2 id="whattodonext">6. Your Rights</h2>
        <p className={style.text}>You have the following rights concerning your data:</p>
        <ul>
          <li style={{display: "inline"}}>1. <b>Access:</b>You can request information on what data Venyra stores about you.</li> <br/>
          <li style={{display: "inline"}}>2. <b>Deletion</b> You can request the deletion of your data by contacting the bot developer or using available commands.</li> <br/>
          <li><b>Correction:</b> If your data is inaccurate, you can request corrections.</li>
        </ul>
        <p className={style.text}>To exercise these rights, please contact us using the details in Section 9.</p><br/>
        <h2 id="whattodonext">7. Children's Policy</h2>
        <p className={style.text}>Venyra is intended for use by individuals aged 13 and older, in compliance with <a style={{display: "inline"}} href="https://discord.com/terms">Discord’s Terms of Service</a>. We do not knowingly collect data from anyone under 13.</p>
        <br/>
        <h2 id="whattodonext">8. Changes to This Policy</h2>
        <p className={style.text}>This Privacy Policy may be updated periodically to reflect changes in Venyra’s features or legal requirements. Continued use of the bot after changes indicates your acceptance of the updated policy.</p>
        <h2 id="whattodonext">9. Contact</h2>
        <p style={{display: "inline"}} className={style.text}>If you have questions, concerns, or requests regarding this Privacy Policy, please contact:</p>
        <ul>
          <li style={{display: "inline"}}>- Website forum: <a style={{ display: "inline"}} href="https://lynnux.xyz/#contact">lynnux.xyz/#contact</a></li> <br/>
          <li>- Email <a style={{ display: "inline"}} href="mailto:contact.lynnux@gmail.com">contact.lynnux@gmail.com</a></li> <br/>
        </ul> <br />      </section>
    </article>
  )
}