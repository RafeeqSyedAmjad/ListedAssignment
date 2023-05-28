import Head from "next/head";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "@/components/Dashboard/Dashboard";
import { getProviders, getSession, useSession } from "next-auth/react";

export default function Home({providers}) {

  const { data: session } = useSession()

  if (!session) return <Login providers={providers} />;
  
  return (
    <div>
      <Head>
        <title>Listed Assignment By Rafeeq</title>
      </Head>
      <main className="flex flex-row w-screen min-h-screen bg-[#F5F5F5]">
        <Sidebar />
        <div className="flex flex-col flex-1 ">
          <Header />
          <div className="flex-1 overflow-auto">
            <Dashboard />
          </div>
        </div>
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props:{
      providers,
      session,
    }
  }
}