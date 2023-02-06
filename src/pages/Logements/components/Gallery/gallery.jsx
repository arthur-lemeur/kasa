import React, {useEffect, useState} from "react";
import './_gallery.scss';
import ArrowLeft from "../../../../assets/arrow_left.png";
import ArrowRight from "../../../../assets/arrow_right.png";
import {memo} from "react";

const Gallery = memo(function Gallery({pictures}) {
    useEffect(() => {
        const initialisationGallery = () => {
            const image = document.createElement("img");
            image.classList.add("image");
            image.alt = "Banner";
            image.src= photo;

            let slide = document.querySelector(".slide");
            slide.appendChild(image);
            slide.classList.add("active");
        }

        let i = 0;
        let photo = pictures[i];

        if (pictures.length > 1) {
            for (let i = 0; i < pictures.length; i++) {
                const dotElement = document.createElement("span");
                dotElement.classList.add("dot");
                const dots = document.querySelector(".dots");
                dots.appendChild(dotElement);
            }

            let dot = document.getElementsByClassName("dot");
            dot[i].classList.add("dot_selected");

            const slider = (photo, i) => {
                const image = document.querySelector('.image');
                image.src = photo;
                dot[i].classList.add("dot_selected");
            }

            initialisationGallery();

            const arrowleft = document.querySelector(".arrow_left");
            const arrowright = document.querySelector(".arrow_right");

            arrowright.addEventListener('click', function() {
                dot[i].classList.remove("dot_selected");
                let slide = document.querySelector(".slide")
                slide.classList.remove("active");
                setTimeout(() => {
                    if (i < (pictures.length - 1)) {
                        i++;
                    } else {
                        i = 0;
                    }
                    photo = pictures[i];
                    slider(photo, i);
                    slide.classList.add("active");
                }, 700)
            })


            arrowleft.addEventListener('click', function() {
                dot[i].classList.remove("dot_selected");
                let slide = document.querySelector(".slide")
                slide.classList.remove("active");
                setTimeout(() => {
                    if (i > 0) {
                        i--;
                    } else {
                        i = pictures.length - 1;
                    }
                    photo = pictures[i];
                    slider(photo, i);
                    slide.classList.add("active");
                }, 400)
            })


            let dotsArray = document.querySelectorAll(".dot");

            dotsArray.forEach((item, n) => {
                item.addEventListener('click', function () {
                    dot[i].classList.remove("dot_selected");
                    let slide = document.querySelector(".slide")
                    slide.classList.remove("active");
                    setTimeout(() => {
                        i = n;
                        photo = pictures[i];
                        slider(photo, i);
                        slide.classList.add("active");
                    }, 700)
                })
            });

        } else {
            initialisationGallery();
        }
    }, )

    return(
        <div id="banner">
            <img src={ArrowLeft} className="arrow arrow_left" alt="précédent" />
            <img src={ArrowRight} className="arrow arrow_right" alt="suivant"/>

            <div className='slide'></div>
            <div className="dots"></div>
        </div>
    )
});

export default Gallery;