import style from "@/styles/imageofcode.module.css"

export default function Terms() {
  return (
    <article className="terms active">
      <section className={style.content}>
        <h2 id="introduction">Terms of Service for Venyra Bot</h2>
        <p className={style.text}>Last Updated: Jan 14, 2025</p>
        <p className={style.text}>
          Welcome to Venyra! By using this bot, you agree to the following terms. If you do not agree to these terms, please refrain from using the bot. These terms may be updated periodically, and it is your responsibility to review them regularly.
        </p>
        <h2 id="whattodonext">1. Description of Service</h2>
        <p className={style.text}>
          Venyra is a Discord bot designed to foster community engagement by implementing a global leveling system and server activity tracking. Its primary purpose is to encourage user participation and server growth through dynamic rewards and interactive features. The bot is provided "as is" and may be subject to updates and changes without prior notice.
        </p>
        <h2 id="whattodonext">2. User Obligations</h2>
        <p className={style.text}>By using Venyra, you agree to the following:</p>
        <ul>
          <li style={{display: "inline"}}>1. You are at least 13 years old, in compliance with <a style={{display: "inline"}} href="https://discord.com/terms">Discord’s Terms of Service</a>.</li> <br/>
          <li style={{display: "inline"}}>2. You will not exploit or misuse Venyra’s leveling system, server activity tracking, or other features.</li> <br/>
          <li>3. You will comply with all applicable local, national, and international laws when using the bot.</li>
        </ul>
        <p className={style.text}></p>
        <h2 id="whattodonext">3. Data Collection and Privacy</h2>
        <p className={style.text}>Venyra collects and processes the following data to operate effectively:</p>
        <ul>
          <li style={{display: "inline"}}><b>User IDs:</b> To track individual activity and leveling progress.</li> <br/>
          <li style={{display: "inline"}}><b>Server IDs:</b> To calculate server-level progression and milestones.</li> <br/>
          <li><b>Activity Data:</b> Such as XP earned, messages sent, or other relevant engagement metrics.</li>
        </ul>
        <p style={{display: "inline"}} className={style.text}>Data collected by Venyra is solely used for its core features and is not shared or sold to third parties. For more information, please refer to our <a style={{display: "inline"}} href="./policy">Privacy Policy</a>.</p>
        <h2 id="whattodonext">4. Prohibited Uses</h2>
        <p className={style.text}>You may not:</p>
        <ul>
          <li style={{display: "inline"}}>1. Use Venyra for any illegal, malicious, or unauthorized purposes.</li> <br/>
          <li style={{display: "inline"}}>2. Attempt to manipulate or exploit the leveling or activity systems for unfair gains.</li> <br/>
          <li>3. Use the bot to harass or disrupt communities.</li>
        </ul> <br />
        <p className={style.text}>If prohibited use is detected, access to Venyra may be revoked, and further action may be taken.</p>
        <h2 id="whattodonext">5. Server-Level Progression</h2>
        <p className={style.text}>Server-level progression is tied to individual user activity. By using Venyra, you acknowledge that:</p>
        <ul>
          <li style={{display: "inline"}}>1. Server admins cannot manually adjust XP rates or progress, as these are dynamically calculated to ensure fairness across all communities.</li> <br/>
          <li>2. Rewards for server milestones, such as roles or special features, are determined by server administrators in accordance with the bot’s capabilities.</li> <br/>
        </ul> <br />
        <h2 id="whattodonext">6. Bot Downtime and Updates</h2>
        <br />
        <ul>
          <li style={{display: "inline"}}>1. Venyra’s functionality may be interrupted due to maintenance, updates, or unforeseen technical issues.</li> <br/>
          <li>2. <a style={{ display: "inline"}} href="https://github.com/LynnuxDev">LynnuxDev</a> is not liable for any inconvenience or loss caused by downtime or feature changes.</li> <br/>
        </ul> <br />
        <h2 id="whattodonext">7. Liability</h2>
        <br />
        <ul>
          <li style={{display: "inline"}}>1. Venyra is provided “as is,” without warranties of any kind.</li> <br/>
          <li>2. <a style={{display: "inline"}} href="https://github.com/LynnuxDev">LynnuxDev</a> is not responsible for any losses, damages, or issues arising from the use or misuse of the bot.</li> <br/>
        </ul> <br />
        <h2 id="whattodonext">8. Server Administrator Responsibilities</h2>
        <p className={style.text}>If you add Venyra to your server, you agree to:</p>
        <ul>
          <li style={{display: "inline"}}>1. Inform your server members about the bot's presence and functionality.</li> <br/>
          <li style={{display: "inline"}}>2. Monitor bot usage to ensure compliance with these terms within your server.</li> <br/>
          <li>3. Avoid setting inappropriate rewards or incentives tied to the bot’s features.</li> <br/>
        </ul> <br />
        <h2 id="whattodonext">9. Ownership</h2>
        <p style={{display: "inline"}} className={style.text}>All code, features, and designs of Venyra are the intellectual property of <a style={{display: "inline"}} href="https://github.com/LynnuxDev">LynnuxDev</a>. You may not replicate, modify, or distribute the bot without prior written permission.</p>
        <h2 id="whattodonext">10. Termination</h2>
        <p style={{display: "inline"}} className={style.text}><a style={{display: "inline"}} href="https://github.com/LynnuxDev">LynnuxDev</a> reserves the right to terminate or restrict access to Venyra for any reason, with or without notice, including but not limited to violations of these terms.</p>
        <h2 id="whattodonext">11. Changes to the Terms of Service</h2>
        <p style={{display: "inline"}} className={style.text}>These terms may be updated periodically. Continued use of Venyra following changes indicates your acceptance of the updated terms.</p>
        <h2 id="whattodonext">12. Contact</h2>
        <p style={{display: "inline"}} className={style.text}>If you have questions, concerns, or disputes regarding these terms, please contact us:</p>
        <ul>
          <li style={{display: "inline"}}>- Website forum: <a style={{ display: "inline"}} href="https://lynnux.xyz/#contact">lynnux.xyz/#contact</a></li> <br/>
          <li>- Email <a style={{ display: "inline"}} href="mailto:contact.lynnux@gmail.com">contact.lynnux@gmail.com</a></li> <br/>
        </ul> <br />
      </section>
    </article>
  )
}