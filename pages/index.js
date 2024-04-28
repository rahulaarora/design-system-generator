import Dashboard from "@/components/Dashboard/Dashboard";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Navbar />
      {session ? <Dashboard /> : <Hero />}
      <Footer />
    </>
  );
}
