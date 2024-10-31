
import Main from "./components/main";
import Navigation from "./components/navigation";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Page() {
    
    return (
        <div className="">
        <Navigation />
        <Main />
        <About />
        <Projects />
        <Contact />
        </div>
    )

}