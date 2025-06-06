export default function Icon({ name, color, size }: { name: string; color?: string; size?: number }) {

    const fill = color ? color : "inherit";
    const xy  = size ? size : 20;

    if (name === "arrow") {
        return (
            <svg width={xy} height={xy} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <path d="M17,2h-9c-.55,0-1,.45-1,1s.45,1,1,1h6.59L1.99,16.6c-.39.39-.39,1.02,0,1.41.39.39,1.02.39,1.41,0l12.6-12.6v6.59c0,.55.45,1,1,1s1-.45,1-1V3c0-.55-.45-1-1-1Z" fill={fill}/>
            </svg>
        )
    }
    
    if (name === "facebook") {
        return (
            <svg width={xy} height={xy} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <path d="M17.86,0H2.14c-.57,0-1.11.23-1.52.63-.4.4-.63.95-.63,1.52v15.71c0,.57.23,1.11.63,1.52.4.4.95.63,1.52.63h6.13v-6.8h-2.81v-3.2h2.81v-2.44c0-2.77,1.65-4.31,4.18-4.31,1.21,0,2.48.22,2.48.22v2.72h-1.4c-1.38,0-1.8.85-1.8,1.73v2.08h3.07l-.49,3.2h-2.58v6.8h6.13c.57,0,1.11-.23,1.52-.63.4-.4.63-.95.63-1.52V2.14c0-.57-.23-1.11-.63-1.52-.4-.4-.95-.63-1.52-.63Z" fill={fill}/>
            </svg>
        )
    }

    if (name === "flickr") {
        return (
            <svg width={xy} height={xy} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <path d="M17.86,0H2.14C.96,0,0,.96,0,2.14v15.71c0,1.18.96,2.14,2.14,2.14h15.71c1.18,0,2.14-.96,2.14-2.14V2.14c0-1.18-.96-2.14-2.14-2.14ZM6.45,12.81c-1.57,0-2.83-1.27-2.83-2.83s1.27-2.83,2.83-2.83,2.83,1.27,2.83,2.83-1.27,2.83-2.83,2.83ZM13.55,12.81c-1.57,0-2.83-1.27-2.83-2.83s1.27-2.83,2.83-2.83,2.83,1.27,2.83,2.83-1.27,2.83-2.83,2.83Z" fill={fill}/>
            </svg>
        )
    }

    if (name === "instagram") {
        return (
            <svg width={xy} height={xy} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M10,4.87c-2.84,0-5.13,2.29-5.13,5.13s2.29,5.13,5.13,5.13,5.13-2.29,5.13-5.13-2.29-5.13-5.13-5.13ZM10,13.33c-1.83,0-3.33-1.49-3.33-3.33s1.49-3.33,3.33-3.33,3.33,1.49,3.33,3.33-1.5,3.33-3.33,3.33ZM16.53,4.66c0,.66-.54,1.2-1.2,1.2s-1.2-.54-1.2-1.2.54-1.2,1.2-1.2,1.2.54,1.2,1.2ZM19.93,5.88c-.08-1.6-.44-3.02-1.62-4.19C17.15.52,15.73.15,14.12.07,12.47-.02,7.53-.02,5.88.07c-1.6.08-3.02.44-4.19,1.61C.51,2.85.15,4.27.07,5.87-.02,7.52-.02,12.47.07,14.12c.08,1.6.44,3.02,1.62,4.19,1.17,1.17,2.59,1.53,4.19,1.62,1.65.09,6.6.09,8.25,0,1.6-.08,3.02-.44,4.19-1.62,1.17-1.17,1.53-2.59,1.62-4.19.09-1.65.09-6.59,0-8.25ZM17.8,15.89c-.35.87-1.02,1.55-1.9,1.9-1.32.52-4.44.4-5.89.4s-4.58.12-5.89-.4c-.87-.35-1.55-1.02-1.9-1.9-.52-1.32-.4-4.44-.4-5.89s-.12-4.58.4-5.89c.35-.87,1.02-1.55,1.9-1.9,1.32-.52,4.44-.4,5.89-.4s4.58-.12,5.89.4c.87.35,1.55,1.02,1.9,1.9.52,1.32.4,4.44.4,5.89s.12,4.58-.4,5.89Z" fill={fill}/>
            </svg>
        )
    }

    if (name === "youtube") {
        return (
            <svg width={xy} height={xy} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <polygon points="8.57 12.09 12.23 10.01 8.57 7.93 8.57 12.09" fill={fill}/>
            <path d="M17.78,0H2.22C1,0,0,1,0,2.22v15.56c0,1.22,1,2.22,2.22,2.22h15.56c1.22,0,2.22-1,2.22-2.22V2.22c0-1.22-1-2.22-2.22-2.22ZM16.71,13.4c-.16.61-.64,1.07-1.24,1.23-1.09.29-5.47.29-5.47.29,0,0-4.38,0-5.47-.29-.6-.16-1.08-.62-1.24-1.23-.29-1.1-.29-3.39-.29-3.39,0,0,0-2.29.29-3.39.16-.61.64-1.09,1.24-1.25,1.09-.29,5.47-.29,5.47-.29,0,0,4.38,0,5.47.29.6.16,1.08.64,1.24,1.25.29,1.1.29,3.39.29,3.39,0,0,0,2.29-.29,3.39Z" fill={fill}/>
            </svg>
        )
    }

    if (name === "phone") {
        return (
            <svg width={xy} height={xy} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M4.02,8.66c1.6,3.14,4.18,5.71,7.32,7.32l2.44-2.44c.3-.3.74-.4,1.13-.27,1.24.41,2.59.63,3.97.63.61,0,1.11.5,1.11,1.11v3.88c0,.61-.5,1.11-1.11,1.11C8.46,20,0,11.54,0,1.11,0,.5.5,0,1.11,0h3.89c.61,0,1.11.5,1.11,1.11,0,1.39.22,2.72.63,3.97.12.39.03.82-.28,1.13l-2.44,2.44Z" fill={fill}/>
            </svg>
        )
    }
    
    if (name === "loading") {
        return (
            <svg width={xy} height={xy} viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g data-idx="1"><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="10" stroke="#808080" fill="none" cy="50" cx="50" data-idx="2" transform="matrix(0.7289557200325765,-0.6845608506420653,0.6845608506420653,0.7289557200325765,-20.675828533732087,47.780256530474446)">
  
  </circle><g data-idx="4"></g></g>
            </svg>
        )
    }
}