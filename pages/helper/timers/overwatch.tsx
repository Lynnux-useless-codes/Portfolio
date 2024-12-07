import Navbar from "@/components/mainPage/navbar";
import Sidebar from "@/components/mainPage/sidebar";
import Main from "@/components/helper/timers/overwatch";

export default function Index() {
    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <Navbar currentHash={"portfolio"}/>
                <Main/>
            </div>
        </main>
    );
}
