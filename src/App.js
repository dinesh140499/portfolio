import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience.jsx'
import Counter from './components/Counter.jsx'
import Work from './components/Work'
import MyClients from './components/MyClients.jsx'
import BlogPost from './components/BlogPost.jsx'
import Contact from './components/Contact.jsx'

import Address from './components/Address.jsx'
import Footer from './components/Footer.jsx'







// styles
import './styles/App.scss'
import './styles/Navbar.scss'
import './styles/Home.scss'
import './styles/About.scss'
import './styles/Services.scss'
import './styles/Experience.scss'
import './styles/Counter.scss'
import './styles/Work.scss'
import './styles/Work_Navbar.scss'
import './styles/MyClients.scss'
import './styles/ClientCarousel.scss'
import './styles/BlogPost.scss'
import './styles/Contact.scss'
import './styles/Address.scss'

import './styles/Footer.scss'




function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Experience />
      <Counter />
      <Work />
      <MyClients/>
      <BlogPost />
      <Contact />
      <Address />
      <Footer />

    </div>
  );
}

export default App;
