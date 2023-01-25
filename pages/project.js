import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import frame from "../public/frame.png";
import Image from "next/image";
import giphy from "../public/giphy.gif";
import code from "../public/code.png";
import process from "../public/process.png";
import slide1 from "../public/slide1.png";
import slide2 from "../public/slide2.png";
import slide3 from "../public/slide3.png";
import journey from "../public/journey.jpg";
import audit from "../public/audit.png";
import report1 from "../public/report1.jpg";
import report2 from "../public/report2.jpg";
import report3 from "../public/report3.jpg";
import paper from "../public/paper.png";
import digital from "../public/digital.png";
import flow from "../public/flow.png";
import System from "../public/system.png";
import mockups from "../public/mockups.png";
import web1 from "../public/web1.png";


export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
  
    return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>VajeevanR Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        
        </Head>
        <main className=" bg-white px-10   dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="" >
            <nav className="py-10 mb-12 flex justify-between text-black dark:text-white rou">
              <a className="font-burtons text-xs md:text-xl" href="/">Vajeevan R</a>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white text-xs md:text-xl px-4 py-2 border-none rounded-md ml-8 "
                    href="https://drive.google.com/file/d/1bYD36JzJMacBDOXxtqUJFUV7xgXGFC7B/view?usp=share_link"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
        </section>
        <section>
            <div className="px-10 py-10">
                <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Food Menu App</h1> 
                <div className="flex justify-center">
                <Image src={code} alt={""}   />
                </div> 
            </div>
            <div className="px-10 py-10 dark:text-gray-200">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >At-a-Glance</h1>
                <p className="py-2 px-5">I worked on a project as a UX designer for over 
                a month guided by google UX design course materials and peers. I worked 
                to solve a problem with users having no idea about the food menu and hidden 
                costs. I identified this problem by researching online and with my friends. 
                I brainstormed ideas and defined the focus and started the designing process. 
                In One month, I completed researching, wireframing, prototyping, and testing.</p>

            </div>
            <br></br>
            <div className=" px-10 flex flex-col md:flex-row dark:text-gray-200 " >
                <div className=" px-10 basis-1/3">
                    <h4 className=" font-bold  "> Timeline</h4>
                    <br></br>
                    <h4> 1 Month</h4>
                </div>
                <br></br>
                
                <div className=" px-10 basis-1/3 ">
                    <h4 className=" font-bold  "> My Role</h4>
                    <br></br>
                    <h4> UX Designer</h4>
                </div> 
                <br></br>
                <div className=" px-10 basis-1/3 ">
                    <h4 className=" font-bold  "> Platform</h4>
                    <br></br>
                    <h4> Figma</h4>
                </div>  
                <br></br> 
            </div>  
            <div className="px-10 py-10 dark:text-gray-200">
                <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Problem</h1>
                <p className="py-2 px-5">Restaurant’s Food menu and their hidden costs 
                have the following problems:</p>
                <ul className="list-disc py-2 px-10">
                    <li>such as tax and service charges tend to exceed the user budget.</li>
                    <li>faces difficulty in understanding continental foods and struggles to choose a meal</li>
                </ul>
            </div>  
            <div className="px-10 py-10 dark:text-gray-200">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Solution</h1>
                <p className="py-2 px-5">I designed an app that has a clear description 
                of the food items. Users can select the food they are gonna have and 
                calculate the bill with Tax and service charges. also, the user can select 
                the table selection and choose a date for the dine-in.</p>
                <Image src={frame} alt={""}  />
                <br></br>
                <div className=" flex justify-center ">
                <Image src={giphy} alt={""}  />
                </div>
            </div>
            <div className="px-10 py-10">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Process</h1>
                <Image src={process} alt={""}  />
            </div>
            <div className="px-10 py-10 dark:text-gray-200">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Persona</h1>
                <p className="py-2 px-5">To understand the users, I chose two kinds 
                of user personas and developed it</p>
                <Image src={slide1} alt={""}  />
                <Image src={slide2} alt={""}  />
                <Image src={slide3} alt={""}  />
                
            </div>
            <div className="px-10 py-10">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Lana’s User journey</h1>
                <Image src={journey} alt={""}  />
            </div>  
            <div className="px-10 py-10">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Competitive Audit</h1>
                <Image src={audit} alt={""}  />
            </div>
            <div className="px-10 py-10">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Competitive Audit Report</h1>
                <Image src={report1} alt={""}  />
                <Image src={report2} alt={""}  />
                <Image src={report3} alt={""}  />
            </div>
            <div className="px-10 py-10 dark:text-gray-200">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Paper first</h1>
                <p className="py-2 px-5">The process below begins with my initial ideas 
                wireframes, then moves to mockups, and finally to the high-fidelity prototype. 
                In this simple version, you can see how I Choose a Home page design by rapid
                 paper wireframing.</p>
                <Image src={paper} alt={""}  />
            </div>
            <div className="px-10 py-10 dark:text-gray-200">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >From Paper to Digital</h1>
                <p className="py-2 px-5">I then brought my idea to an interactive digital 
                low-fidelity prototype</p>
                <Image src={digital} alt={""}  />
            </div>
            <div className="px-10 py-10 dark:text-gray-200">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >User Flow</h1>
                <p className="py-2 px-5">After getting some ideas on paper, I mapped 
                out the user flow if Lana Uses our app</p>
                <Image src={flow} alt={""}  />
            </div>
            <div className="px-10 py-10">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Design System</h1>
                <Image src={System} alt={""}  />
            </div>
            <div className="px-10 py-10">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Design Iterations</h1>
                <ol className="list-decimal px-10 dark:text-gray-200">
                    <li>Improved Hierarchy</li>
                    <li>Changed Home design</li>
                    <li>Added End User flow </li>
                </ol>
            </div>
            <div className="px-10 py-10">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >Mockups</h1>
                <Image src={mockups} alt={""}  />
            </div>
            <div className="px-10 py-10">
            <h1 className="text-xl text-left text-gray-600 py-5 sm:text-5xl dark:text-gray-200" >High-Fidelity Prototype</h1>
                <div className="flex justify-center" >
                <Image src={web1} alt={""}  />
                </div>
                <div className="text-center    ">
                <a href="https://www.figma.com/proto/kavnfQJSzMcx7VmUtezA0O/Food-Menu-App?node-id=29%3A3&scaling=scale-down&page-id=29%3A2&starting-point-node-id=29%3A3">
                  <button className="button font-bold "><span>Check prototype</span></button>
                </a>
              </div>
            </div>

        </section>
























        <section>
        <nav className="py-10 text-black flex justify-between dark:text-white">
            <h1 className="font-burtons text-sm ">All Rights reserved @vajeevanR</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className=" font-burtons px-4 py-2 border-none rounded-md ml-8"
                  href="/"
                >
                  Home
                </a>
              </li>
            </ul>
          </nav>
        </section>
        
        </main>
    </div>
    )
}