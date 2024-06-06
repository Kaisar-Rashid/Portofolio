import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/footer";


export default function Home() {
  return (
 <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip ">
  <div className="max-w-7xl w-full ">
    <FloatingNav navItems={navItems}/>
    <Hero/>
    <RecentProjects />
    <Grid/>
    <Experience/>
    <Approach/>
    <Footer />
    
  </div>
 </main>
  );
}
