import Head from "next/head";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Listed Assignment By Rafeeq</title>
      </Head>
      <main className="bg-[#F5F5F5] min-h-screen flex xl:px-[40px] xl:py-[40px] xxs:p-[0]">
        {/* <Login/> */}
        
        <Sidebar/>
      </main>
    </div>
  )
}
