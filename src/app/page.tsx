//1.Import area
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Image from "next/image";

//2. FuNCTION DEFINATION AREA
function Home() {

  //2.1 Hook Variable


  //2.2 Function Defination

  //2.3  Return Statement
  return (
    <>
        <div className="container-fluid  text-white text-center fs-2" > 
          <Header/>
          <main className="row m-0">
            <Aside/>
            <Section/>
          </main>
          <Footer/>

        </div>
    </>
  );
}

//3.Export area
export default Home;