import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import video from '../assets/video/video.mp4';
import logo from '../assets/images/color-cinevistas.png';

const IndexPage = () => (
  <Layout>
    <section>
      <div className="video-container">
        <div className="video-overlay">
          <img src={logo} alt="" />
          <div className="divider"></div>
          <h1>Interactive Virtual Tours</h1>
          <h2>FOR RETAIL, COMMERCIAL BUSINESSESS, AND REAL ESTATE</h2>
        </div>
        <main>
          <iframe
            src="https://player.vimeo.com/video/433063711?background=1"
            frameborder="0"
            allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            styles="--aspect-ratio: 333 / 640;"
          ></iframe>
        </main>
      </div>
    </section>

    {/* <section id="banner">
      <div className="inner">
        <h2>The Next Standard</h2>
        <p>Bringing you a new way to capture your audience</p>
      </div>
    </section> */}

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Work With A Vision</h2>
            <p>
              We can never stress enough to clients how important it is to work
              with a team that wants to see you vision come to life as bad as
              you do. We strive to make sure that we provide a virutal
              experience to live up to what you provide in person.
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Captivate Your Clients</h2>
            <p>
              Stress less about how much you need to convince people to visit
              your location, give them an experience before they ever leave the
              house.
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">An Immersive Experience </h2>
            <p>
              Let potential clients get a full on feel for you business before
              walking through the door. With our tours, they can not only walk
              around and explore your place of business, but you can have
              seamless videos integrated into the tour allowing you to still be
              the guide. Click below to learn about all the features you can get
              with your tour, or just feel it out in our portfolio.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Feature Tours</h2>
          <p>
            Don't take our word for it. Explore some of the work we've done and
            explore the potential of what we bring to the table
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>

            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>

            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
