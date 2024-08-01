import Navbar from "@/components/mainPage/navbar";
import Sidebar from "@/components/mainPage/sidebar";
import styles from '@/styles/blogposts.module.css';
import Main from '@/components/helper/main'


const Helper = () => {
    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <Navbar currentHash={"portfolio"}/>
                <Main/>
            </div>
        </main>
    );
};


export default Helper;
