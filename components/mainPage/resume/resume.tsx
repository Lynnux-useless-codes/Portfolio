import Timeline from "@/components/mainPage/resume/timeline"
import Skills from "@/components/mainPage/resume/skill";

export default function Resume() {
    return (
        <article className="resume active" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <Timeline/>
            <Skills/>
        </article>
    );
}