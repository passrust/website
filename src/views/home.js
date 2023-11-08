import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import SectionNumeral from '../components/section-numeral'
import Speaker from '../components/speaker'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PassRust</title>
        <meta property="og:title" content="PassRust (Template 8)" />
      </Helmet>
      <section className="home-hero">
        <div className="home-background">
          <img
            alt="image"
            src="/circle-background.svg"
            className="home-image"
          />
          <img
            alt="image"
            src="/line-background.svg"
            className="home-image01"
          />
        </div>
        <header data-thq="thq-navbar" className="home-navbar">
          <h2 className="home-text">PassRust</h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <span className="navLink">Speakers</span>
              <span className="navLink">Schedule</span>
              <span className="navLink">Sponsors</span>
              <span className="navLink">Useful</span>
            </nav>
            <button className="button">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container01">
                <h2 className="home-text02">PassRust</h2>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="navLink home-text03">About</span>
                <span className="navLink home-text04">Features</span>
                <span className="navLink home-text05">Pricing</span>
                <span className="navLink home-text06">Team</span>
                <span className="navLink home-text07">Blog</span>
              </nav>
              <div className="home-button-container">
                <button className="home-login button">Login</button>
                <button className="button home-register1">Register</button>
              </div>
              <div className="home-icon-group">
                <div className="home-icons">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon10"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className="home-background1"
            />
          </div>
        </header>
        <div className="home-hero-content">
          <h1 className="home-text08">
            World&apos;s Fastest And Most Secure Password Manager
          </h1>
          <div className="home-caption">
            <button className="button-style-1 button home-register2">
              <span className="home-text09">Request A Demo</span>
            </button>
            <p className="home-caption01">
              On-Prem / Cloud
            </p>
          </div>
        </div>
      </section>
      <section className="home-notes">
        <div className="home-first">
          <div data-aos="fade-up-right" className="home-content">
            <h2 className="home-header">
              Next Generation Password Manager with Speed And Security All In One place. 
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <div className="home-list">
              <div className="home-note">
                <div className="home-point"></div>
                <p className="home-text10">
                  PassRust has been made to be reliable and fast.
                </p>
              </div>
              <div className="home-note1">
                <div className="home-point01"></div>
                <p className="home-text11">
                  PassRust puts manageability and security and speed all in a one place.
                </p>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/notes-1-1400w.png"
            className="home-image02 image-notes"
          />
        </div>
        <div className="home-second">
          <div data-aos="fade-up-left" className="home-content01">
            <h2 className="home-header01">
                PassRust is free on your infrastructure.<br></br>
                Don't want to pay for infrastructure?<br></br>
                No problem! Start your cloud subscription now to get the first month for free.<br></br>
            </h2>
            <button className="button button-style-2 home-register3">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img alt="image" src="/notes-2-1400w.png" className="image-notes" />
        </div>
      </section>
      <section className="home-quote">
        <div className="home-content02">
          <h2 className="home-quoted">
            “PassRust is born to be fast, robust and, secure.”
          </h2>
          <div className="home-author">
            <img
              alt="image"
              src="author.jpeg"
              className="home-icon14"
            />
            <div className="home-details">
              <span className="home-name">Pouyan Shalbafan</span>
              <span className="home-from">(Founder PassRust)</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/quote-background.svg"
          className="home-background2"
        />
        <img
          alt="image"
          src="/quote-background.svg"
          className="home-background3"
        />
      </section>
      
      <footer className="home-footer">
        <div className="home-content12">
          <div className="home-details25">
            <h2 className="home-title25">PassRust</h2>
            <p className="home-description09">
              You can have the best of both worlds by PassRust The PassRust is free.
            </p>
          </div>
          <div className="home-socials">
            <img alt="image" src="/linkedin.svg" className="social" />
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <img
                alt="image"
                src="/instagram.svg"
                className="home-image27 social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <img
                alt="image"
                src="/twitter.svg"
                className="home-image28 social"
              />
            </a>
          </div>
          <span className="home-copyright">
            Privacy — Terms &amp; Conditions — Code of Conduct © 2022 PassRust All
            Rights Reserved
          </span>
        </div>
      </footer>
      <div>
        <div className="home-container07">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container09">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
