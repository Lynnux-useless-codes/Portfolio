import Navbar from "@/components/mainPage/navbar";
import Sidebar from "@/components/mainPage/sidebar";
import Terms from "@/components/Venyra/terms";

export default function Index() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar currentHash={"portfolio"}/>
        <Terms/>
      </div>
    </main>
  );
}
