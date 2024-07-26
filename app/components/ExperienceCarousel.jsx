"use client"

import * as React from 'react';
import styles from '../modulestyle/bestSellersCarousel.module.css'
import { ArrowBackIos, ArrowForwardIos, Description } from '@mui/icons-material';
import { IconButton } from '@mui/material';

var bestSellers = [
  { name: "Firestreak", title: "Designer & 3D Modeller", imgPath:'fs.png', description: "At Firestreak I created various 3D models and textures to use as decoration, and came up with some UI designs as well as the layout of the lobby. You can find some of my 3D models at my mcmodels store." },
  { name: "Darza's Dominion", title: "Pixel Artist", imgPath:'darzas.png', description: "Over the 4 years I did volunteer work for Darzas Dominion I made countless assets, mostly consisting of monsters and terrain." },
]

function ExperienceCarousel() {

  return (<div className={styles.best_sellers_grid}>
    {bestSellers.map((product, index) => {
    return (
        <div className={styles.product_wrapper} key={index}>
          <img src={product.imgPath}></img>
          <div className={styles.product_details}>
            <p className={styles.product_name}>{product.name}</p>
            <p className={styles.product_title}>{product.title}</p>
            <p className={styles.product_description}>{product.description}</p>
          </div>
        </div>
    );})}
  </div>);
}

export default ExperienceCarousel;