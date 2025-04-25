import { AnimationParams } from "animejs";

export const slideLeft: AnimationParams = { 
    x: { from: 30, to: 0 }, 
    opacity: { from: 0, to: 1 },
}

export const slideUp: AnimationParams = { 
    y: { from: 30, to: 0 }, 
    opacity: { from: 0, to: 1 },
}

export const fadeIn: AnimationParams = {  
    opacity: { from: 0, to: 1 },
}