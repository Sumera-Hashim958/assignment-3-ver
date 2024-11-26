
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import HeroSection from "./components/HeroSection/herosection"
import ProjectsPage from "./components/Projects/projects";
import AboutPage from "./components/about/about";
import ContactPage from "./components/contact/contact";

export default function RootLayout({
}) {
  return (
    <html lang="en">
      <body>
        <section>
        <Header/>
        </section>

        <section className="my-4">
        <HeroSection/>
        </section>

        <section className="my=4">
        <ProjectsPage/>
        </section>

        <section className="my-4">
        <AboutPage/>
        </section>

        <section className="my-4">
        <ContactPage/>
        </section>
        <Footer/>
      
      </body>
    </html>
  );
}
