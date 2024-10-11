import Navbar from "@/components/mainPage/navbar";
import Sidebar from "@/components/mainPage/sidebar";
import styles from '@/styles/blogposts.module.css';
import Timers from '@/components/helper/timers'


const Helper = () => {
    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <Navbar currentHash={"portfolio"}/>
                <Timers/>
            </div>
        </main>
    );
};


export default Helper;
