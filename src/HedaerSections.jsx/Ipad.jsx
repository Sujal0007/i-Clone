import ProductDetails from "./HeaderProduct";
export default function Ipad(){
  
        const padImages = [
            "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_productivity__d55aee5so6ky_large_2x.jpg",
            "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_creativity__gcfv7x90x42u_large_2x.jpg",
            "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_learning__es1tt702bf6u_large_2x.jpg"
        ];
    
        return (
            <ProductDetails
                videoSrc='https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/large_2x.mp4' 
                title="Get To Know Ipad." 
                images={padImages} 
            />
        );
    }
