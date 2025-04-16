"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Android, Email, Fort, GitHub, Google, Search } from "@mui/icons-material";
import ExperienceCarousel from "./components/ExperienceCarousel";
import KUTE from 'kute.js'
import { useEffect, useState } from "react";
import { Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const [opacity, setOpacity] = useState(1)

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

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 500, 0);
      
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.hero_wrapper}
          style={{
            opacity: opacity,
            transform: "scaleX(-1)"}}>
        <div className={styles.video_overlay}>
          <svg className={styles.svg_blend} id="visual" viewBox="0 0 900 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <g transform="translate(900, 600)">
                <path id="top1" d="M-270.4 0C-256 -20.7 -241.5 -41.4 -234.7 -62.9C-227.9 -84.4 -228.7 -106.6 -221.7 -128C-214.7 -149.4 -199.9 -169.9 -180.3 -180.3C-160.8 -190.7 -136.5 -190.9 -118.5 -205.2C-100.5 -219.6 -88.7 -248 -70 -261.2C-51.3 -274.4 -25.6 -272.4 0 -270.4L0 0Z" fill="#3A86FF"></path>
              </g>
              <g transform="translate(0, 0)">
                <path id="bot1" d="M270.4 0C260 21.9 249.6 43.8 240.5 64.4C231.4 85 223.5 104.3 214.8 124C206 143.7 196.5 163.7 183.8 183.8C171.2 204 155.6 224.2 135.2 234.2C114.9 244.2 89.8 243.9 66.5 248.2C43.2 252.6 21.6 261.5 0 270.4L0 0Z" fill="#3A86FF"></path>
              </g>
              <g style={{visibility: "hidden", zIndex: -1}} transform="translate(900, 600)">
                <path id="top2" d="M-270.4 0C-263.1 -23.2 -255.7 -46.3 -243.4 -65.2C-231.1 -84.1 -213.8 -98.8 -204.4 -118C-194.9 -137.2 -193.2 -161.1 -183.8 -183.8C-174.4 -206.6 -157.3 -228.3 -135.2 -234.2C-113.1 -240.1 -86 -230.3 -62.6 -233.8C-39.3 -237.2 -19.6 -253.8 0 -270.4L0 0Z" fill="#3A86FF"></path>
              </g>
              <g style={{visibility: "hidden", zIndex: -1}} transform="translate(0, 0)">
                <path id="bot2" d="M270.4 0C259.7 21.6 248.9 43.1 243.4 65.2C237.9 87.3 237.6 110 231.2 133.5C224.9 157 212.5 181.4 191.2 191.2C169.9 201 139.7 196.2 118.5 205.2C97.3 214.2 85.3 237 67 250.2C48.8 263.3 24.4 266.9 0 270.4L0 0Z" fill="#3A86FF"></path>
              </g>
            </svg>
        </div>
      </div>
      <div className={styles.navbar}>
        <Email sx={{ color: "var(--blue)", marginRight: "1rem", height: "4rem"}} onClick={() => openInNewTab("mailto:williamqmckenzie@gmail.com")}></Email>
        <GitHub sx={{ color: "var(--blue)", marginLeft: "1rem"}} onClick={() => openInNewTab("https://github.com/WilliamMcKenzie?tab=repositories")}></GitHub>
      </div>
      <div style={{marginTop: "1rem !important"}} className={styles.projects_wrapper} id="about">
        <h1>About Me</h1>
        <div className={styles.project}>
          <img
              className={styles.about_img}
              src="waterloo_pic.JPG"
              style={{ width: '45vw', height: '32vw', borderRadius: '20px' }}
              alt="KingdomCrusher Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>William McKenzie - Dartmouth NS</p>
            <p className={styles.project_disc}>
            I'm William, a Canadian highschool student with a passion for learning. I am currently building Kingdom Crushers, and trying to hit that 315 bench press. Don't hesitate to email me if you wanna connect!
            <br/>
            <br/>
            <br/>
            Amount made from online projects: $12500
            <br/>
            Amount spent on Kingdomcrushers ads: $12501
            <br/>
            Hustlers mindset: Priceless
            <br/>
            {"Total profit: lim x -> Infinity (12500 - 12501 + x)"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.projects_wrapper} id="projects">
        <h1>Programming Projects</h1>
        <div className={styles.project}>
          <img
            className={styles.project_img}
            src="quizzgen.png"
            style={{ width: '45vw', height: '30.4vw', borderRadius: '20px' }}
            alt="Quizgen Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>2025 - AI/Quiz</p>
            <p className={styles.project_title}>Quizgen</p>
            <p className={styles.project_disc}>
            This project was inspired by the Duolingo learning approach, in which a subject is broken down into sections which each contain questions. Built on NextJS, LLM using Groq, database using MongoDB, styling using DaisyUI/Framer Motion.
            </p>
            <a href="https://www.producthunt.com/posts/quizzgen?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-quizzgen" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=948391&theme=light&t=1744819788015" alt="Quizzgen - Test&#0032;yourself&#0032;on&#0032;anything&#0044;&#0032;lightening&#0032;fast&#0046; | Product Hunt" style={{ width: "fill", height: 54 }} height="54" /></a>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://quizzgen.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('https://github.com/WilliamMcKenzie/QuizGenerator')}>
                <GitHub className={styles.github_button}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            className={styles.project_img}
            src="kingdomcrusher.png"
            style={{ width: '45vw', height: '28vw', borderRadius: '20px' }}
            alt="KingdomCrusher Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>2024-2025 - MMO/Video Game</p>
            <p className={styles.project_title}>Kingdom Crusher</p>
            <p className={styles.project_disc}>
            No frameworks, no premade backend, me and 2 friends managed to build out a scalable and efficient MMO game with loads of content, making our first 100 dollars within 6 months and with over 1000 total accounts created.
            </p>
            <a href="https://www.producthunt.com/posts/kingdom-crushers?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kingdom&#0045;crushers" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=694943&theme=light&t=1744819997335" alt="Kingdom&#0032;Crushers - A&#0032;classic&#0032;web&#0032;MMO&#0044;&#0032;flooded&#0032;with&#0032;nostalgia | Product Hunt" width="250" height="54" /></a>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://kingdomcrushers.io')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('https://play.google.com/store/apps/details?id=com.williamqm.mmorelam')}>
                <Android className={styles.github_button}></Android>
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('https://github.com/WilliamMcKenzie/KingdomCrushers')}>
                <GitHub className={styles.github_button}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            className={styles.project_img}
            src="lagso.png"
            style={{ width: '45vw', height: '30vw', borderRadius: '20px' }}
            alt="Lagso Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>2024 - ML/Evolution</p>
            <p className={styles.project_title}>Lagso</p>
            <p className={styles.project_disc}>
              In computer science class, I was bored with Java and decided to try something new. I decided to start from the bottom and make an evolution sim from scratch for the kicks. Lagso stands for Learning and Growing Synthetic Organisms, but mostly it was a free 5 letter domain. You can change the food spawn rate, creature spawn rate, and energy costs of moves.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://www.lagso.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('http://github.com/WilliamMcKenzie/lagso_evolution')}>
                <GitHub className={styles.github_button}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            className={styles.project_img}
            src="chess.png"
            style={{ width: '45vw', height: '29vw', borderRadius: '20px' }}
            alt="Chess Bot Arena Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>2023-2024 - AI/Chess</p>
            <p className={styles.project_title}>Chess Bot Arena</p>
            <p className={styles.project_disc}>
            This project involved hand coding chess AI using the minimax algorithm, as well as the ability for the user to create their own bots, then battle them against eachother via websockets. All move handeling was done through webworkers.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://chess.williamqm.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('http://github.com/WilliamMcKenzie/FrictionlessChess')}>
                <GitHub className={styles.github_button}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            className={styles.project_img}
            src="bulkinator.png"
            style={{ width: '45vw', height: '29vw', borderRadius: '20px' }}
            alt="Bulkinator Project"
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.project_subtitle}>2023 - Service/Meal Planner</p>
            <p className={styles.project_title}>Bulkinator</p>
            <p className={styles.project_disc}>
            Using React with NextJS and Material UI for the frontend, and MongoDB with Prisma for the backend I created a automatic meal planner and searcher using the <a href="https://developer.edamam.com/edamam-docs-recipe-api">Edamame API</a> with account creation, the ability to save recipes and meal plans.
            </p>
            <div style={{ display: 'flex', marginTop: 0, marginBottom: "10px", height: "100%" }}>
              <button className={styles.project_button} onClick={() => openInNewTab('http://bulkinator.williamqm.com')}>
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className={styles.project_button} onClick={() => openInNewTab('http://github.com/WilliamMcKenzie/bulkinator')}>
                <GitHub className={styles.github_button}></GitHub>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <img
            className={styles.project_img}
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
                <GitHub className={styles.github_button}></GitHub>
              </button>
            </div>
          </div>
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
            MCModels {"(7k+ PROFIT)"}
          </button>
        </div>
        <div className={styles.shopCTA} style={{background:"url('furniture.png')"}}>
          <p>Furniture</p>
        </div>
        <div className={styles.shopCTA} style={{background:"url('cosmetics.png')"}}>
          <p>Cosmetics</p>
        </div>
      </div>
    </main>
  );
}
