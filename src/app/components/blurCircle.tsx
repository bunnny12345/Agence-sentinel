"use client";
export default function BlurCircle({top = "auto",left="auto",right="auto",bottom="auto"}) {
    return(
        <div className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-[#C6D4FF] blur-3xl" 
    style={{top: top,left:left,right:right,bottom:bottom}}>
      
    </div>
    );
}