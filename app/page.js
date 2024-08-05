"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Email, Fort, GitHub, Search } from "@mui/icons-material";
import ExperienceCarousel from "./components/ExperienceCarousel";
import KUTE from 'kute.js'
import { useEffect } from "react";
import { Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const goTo = anchor => {
    var element_to_scroll_to = document.getElementById(anchor)
    element_to_scroll_to.scrollIntoView()
  }

  useEffect(() => {
    var tween1 = KUTE.to('#top1', { path: "#top2" }, {repeat: 999, duration: 3000, yoyo: true}).start();
    var tween2 = KUTE.to('#bot1', { path: "#bot2" }, {repeat: 999, duration: 3000, yoyo: true}).start();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <Fort sx={{ color: "var(--blue)", fontSize: 24, visibility: "hidden", marginRight: "auto", marginLeft: "11rem"}}></Fort>
        <a onClick={() => goTo('about')}>About</a>
        <a onClick={() => goTo('experiences')}>Experience</a>
        <a onClick={() => goTo('projects')}>Projects</a>
        <Email sx={{ color: "var(--blue)", marginLeft: "auto", marginRight: "1rem"}} onClick={() => openInNewTab("mailto:williamqmckenzie@gmail.com")}></Email>
        <GitHub sx={{ color: "var(--blue)", marginRight: "10rem"}} onClick={() => openInNewTab("https://github.com/WilliamMcKenzie?tab=repositories")}></GitHub>
      </div>
      <div className={styles.hero_wrapper}>
        <img
            src="background.jpg"
            className={styles.hero_video} width="1600" height="900"
            alt="Flower Background"
          />
        <div className={styles.video_overlay}>
          <button className={`${styles.namestamp} brand_font`}>
            WILLIAM MCKENZIE
          </button>
          <svg className={styles.svg_blend} id="visual" viewBox="0 0 900 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <g transform="translate(900, 600)">
                <path id="top1" d="M-270.4 0C-256 -20.7 -241.5 -41.4 -234.7 -62.9C-227.9 -84.4 -228.7 -106.6 -221.7 -128C-214.7 -149.4 -199.9 -169.9 -180.3 -180.3C-160.8 -190.7 -136.5 -190.9 -118.5 -205.2C-100.5 -219.6 -88.7 -248 -70 -261.2C-51.3 -274.4 -25.6 -272.4 0 -270.4L0 0Z" fill="#FFFFFF"></path>
              </g>
              <g transform="translate(0, 0)">
                <path id="bot1" d="M270.4 0C260 21.9 249.6 43.8 240.5 64.4C231.4 85 223.5 104.3 214.8 124C206 143.7 196.5 163.7 183.8 183.8C171.2 204 155.6 224.2 135.2 234.2C114.9 244.2 89.8 243.9 66.5 248.2C43.2 252.6 21.6 261.5 0 270.4L0 0Z" fill="#FFFFFF"></path>
              </g>
              <g style={{visibility: "hidden"}} transform="translate(900, 600)">
                <path id="top2" d="M-270.4 0C-263.1 -23.2 -255.7 -46.3 -243.4 -65.2C-231.1 -84.1 -213.8 -98.8 -204.4 -118C-194.9 -137.2 -193.2 -161.1 -183.8 -183.8C-174.4 -206.6 -157.3 -228.3 -135.2 -234.2C-113.1 -240.1 -86 -230.3 -62.6 -233.8C-39.3 -237.2 -19.6 -253.8 0 -270.4L0 0Z" fill="#FFFFFF"></path>
              </g>
              <g style={{visibility: "hidden"}} transform="translate(0, 0)">
                <path id="bot2" d="M270.4 0C259.7 21.6 248.9 43.1 243.4 65.2C237.9 87.3 237.6 110 231.2 133.5C224.9 157 212.5 181.4 191.2 191.2C169.9 201 139.7 196.2 118.5 205.2C97.3 214.2 85.3 237 67 250.2C48.8 263.3 24.4 266.9 0 270.4L0 0Z" fill="#FFFFFF"></path>
              </g>
            </svg>
        </div>
      </div>
      <div className={styles.about_wrapper} id="about">
        <h1>About Me</h1>
          <div>
            <h2>
              William McKenzie - Dartmouth NS
            </h2>
            <p>
              Hey there! Im William, a developer from Canada with a passion for technology. I have always had a drive in me to create, whether it be making slingshots in my backyard or websites in vscode. I follow my nature and do what I am interested in at any given moment, hence the variety of different hobbies on this page. When not working I am usually going to the gym, meditating, or spending time with the boys.
            </p>
        </div>
      </div>
      <div className={styles.best_sellers_wrapper} id="experiences">
        <h1>3D Modelling</h1>
        <ExperienceCarousel></ExperienceCarousel>
      </div>
      <div className={styles.shopCTA_container}>
        <div className={styles.shopCTA} style={{background:"url('mobs.png')"}}>
          <p>Mobs</p>
          <button className="main_font" onClick={() => openInNewTab("https://mcmodels.net/vendors/111/williamqm")}>
            MCModels
          </button>
        </div>
        <div className={styles.shopCTA} style={{background:"url('furniture.png')"}}>
          <p>Furniture</p>
        </div>
        <div className={styles.shopCTA} style={{background:"url('cosmetics.png')"}}>
          <p>Cosmetics</p>
        </div>
      </div>
      <div className={styles.projects_wrapper} id="projects">
        <h1>Programming Projects</h1>
        <div className={styles.project}>
          <img
            src="kingdomcrusher.png"
            style={{ width: '45.3vw', height: '28vw', borderRadius: '20px' }}
            alt="KingdomCrusher Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>MMO/Video Game</p>
            <p className={styles.project_title}>Kingdom Crusher</p>
            <p className={styles.project_disc}>
            This project was born from my nostalgia for the game Darzas Dominion. Along with my friend Max, we set out to make a cross platform web/mobile/pc realmlike MMO in Godot, with no gamedev experience might I add. Suprisingly, between his vector math and my multiplayer experience we actually managed to get a working product shipped.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://kingdomcrusher.vercel.app')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="lagso.png"
            style={{ width: '50vw', height: '30vw', borderRadius: '20px' }}
            alt="Lagso Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>ML/Evolution</p>
            <p className={styles.project_title}>Lagso</p>
            <p className={styles.project_disc}>
              In computer science class, I was bored with Java and decided to try something new. I decided to start from the bottom and make an evolution sim from scratch for the kicks. Lagso stands for Learning and Growing Synthetic Organisms, but mostly it was a free 5 letter domain. You can change the food spawn rate, creature spawn rate, and energy costs of moves.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://www.lagso.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('http://github.com/WilliamMcKenzie/lagso_evolution')}>
                <GitHub style={{width: "2vw"}}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="quizgen.png"
            style={{ width: '50vw', height: '30.4vw', borderRadius: '20px' }}
            alt="Quizgen Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>AI/Quiz</p>
            <p className={styles.project_title}>Quizgen</p>
            <p className={styles.project_disc}>
            This project was inspired by the Duolingo learning approach, in which a subject is broken down into sections which each contain questions. I created this using NextJS and the OpenAPI, with some extra motion and detail with Framer Motion.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://quizgen.williamqm.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('http://github.com/WilliamMcKenzie/coursegen')}>
                <GitHub style={{width: "2vw"}}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="chess.png"
            style={{ width: '45vw', height: '29vw', borderRadius: '20px' }}
            alt="Chess Bot Arena Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>AI/Chess</p>
            <p className={styles.project_title}>Chess Bot Arena</p>
            <p className={styles.project_disc}>
            This project involved hand coding chess AI using the minimax algorithm, as well as the ability for the user to create their own bots, then battle them against eachother via websockets. All move handeling was done through webworkers.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://chess.williamqm.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('http://github.com/WilliamMcKenzie/FrictionlessChess')}>
                <GitHub style={{width: "2vw"}}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="bulkinator.png"
            style={{ width: '45vw', height: '29vw', borderRadius: '20px' }}
            alt="Bulkinator Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>Service/Meal Planner</p>
            <p className={styles.project_title}>Bulkinator</p>
            <p className={styles.project_disc}>
            Using React with NextJS and Material UI for the frontend, and MongoDB with Prisma for the backend I created a automatic meal planner and searcher using the <a href="https://developer.edamam.com/edamam-docs-recipe-api">Edamame API</a> with account creation, the ability to save recipes and meal plans.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://bulkinator.williamqm.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('http://github.com/WilliamMcKenzie/bulkinator')}>
                <GitHub style={{width: "2vw"}}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="pixoforge.png"
            style={{ width: '45vw', height: '29vw', borderRadius: '20px' }}
            alt="PixelPal Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>ML/Pixel Art</p>
            <p className={styles.project_title}>PixelPal</p>
            <p className={styles.project_disc}>
            I was inspired to make this as when I practiced pixel art I usually ended up going to other sites to look for inspiration. So I put it all in one place with Pixoforge, including a custom machine learning model  made with TensorflowJS and TeachableMachine which rates your art out of 10 using references I uploaded.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://pixelpal.williamqm.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('http://github.com/WilliamMcKenzie/PixelPal')}>
                <GitHub style={{width: "2vw"}}></GitHub>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
