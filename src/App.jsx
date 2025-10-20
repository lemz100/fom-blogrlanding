import './App.less';
import Navbar from './assets/components/Navbar/Navbar';
import Dropdown from './assets/components/Dropdown/Dropdown';
import Footer from './assets/components/Footer/Footer'
import Button from './assets/components/ButtonDual/Button';
import { useState } from 'react';
import bgCircles from './assets/images/bg-pattern-circles.svg';
import illus1_mob from './assets/images/illustration-editor-mobile.svg';
import illus1_desk from './assets/images/illustration-editor-desktop.svg';
import phones from './assets/images/illustration-phones.svg';
import illus2_mob from './assets/images/illustration-laptop-mobile.svg';
import illus2_desk from './assets/images/illustration-laptop-desktop.svg';

function App() {
  const [dropped, setDropped] = useState(false);

  function handleDropdown() {
    setDropped(prev => !prev);
  }

  return (
    <>
    <header>
      <section className="content">
        <Navbar dropMenu={handleDropdown}/>
        <Dropdown dropped={dropped} handleDropdown={handleDropdown} />
        <article className='text-cont'>
          <span className='text'>
            <p className="title">A modern publishing platform</p>
            <p className="desc">Grow your audience and build your online brand</p>
          </span>
          <span className="buttons">
            <Button type='primary' text='Start for Free' />
            <Button type='secondary' text='Learn More' />
           </span>
        </article>
      </section>
    </header>
    <section className="cont1">
      <p className="heading">Designed for the future</p>
      <section className="main">
        <picture>
          <source media="(max-width: 1439px)" srcset={illus1_mob} />
          <img src={illus1_desk} alt="editor image" />
        </picture>
        <article>
          <section className="content">
            <span>
              <p className="title">Introducing an extensible editor</p>
              <p className="desc">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
            </span>
            <span>
              <p className="title">Robust content management</p>
              <p className="desc">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </span>
          </section>
        </article>
      </section>
    </section>
    <section className="cont2">
      <article className="cont2_1">
        <div className="bg-design">
        </div>
      </article>
      <article className="cont2_2">
        <img src={phones} alt="phones" />
        <span>
          <p className="title">State of the Art Infrastructure</p>
          <p className="desc">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </span>
      </article>

    </section>
    <section className="cont3">
      <picture>
        <source media="(max-width: 1439px)" srcset={illus2_mob} />
        <img src={illus2_desk} alt="laptop image" />
      </picture>
      <article>
        <span>
          <p className="title">Free, open, simple</p>
          <p className="desc">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
        </span>
        <span>
          <p className="title">Powerful tooling</p>
          <p className="desc">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
        </span>
      </article>
    </section>
    <Footer />
    </>
  );
}

export default App
