import Navbar from "@/components/mainPage/navbar";
import Sidebar from "@/components/mainPage/sidebar";
import Policy from "@/components/Venyra/policy";

export default function Index() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar currentHash={"portfolio"}/>
        <Policy/>
      </div>
    </main>
  );
}
