import { Slide, SlideNav } from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.addArrow(".prev", ".next");
slide.changeSlide(3);
