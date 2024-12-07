import { useUrlHash } from "@/hooks/useUrlHash";

import Navbar from "@/components/mainPage/navbar";
import Sidebar from "@/components/mainPage/sidebar";
import About from "@/components/mainPage/about/about";
import Resume from "@/components/mainPage/resume/resume";
import Contact from "@/components/mainPage/contact/contact";
import Portfolio from "@/components/mainPage/portfolio/portfolio";
import Blog from "@/components/mainPage/blog/blog";

export default function Index() {
    const hash = useUrlHash() || "about";
    console.log("Rendering index");

    const validHashes = ["about", "resume", "portfolio", "blog", "contact"];

    const getContent = () => {
        if (validHashes.includes(hash)) {
            switch (hash) {
                case "resume":
                    return <Resume />;
                case "portfolio":
                    return <Portfolio />;
                case "blog":
                    return <Blog />;
                case "contact":
                    return <Contact />;
                default:
                    return <About />;
            }
        } else {
            return <About />;
        }
    };

    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <Navbar currentHash={hash}/>
                {getContent()}
            </div>
        </main>
    );
}
