import ProductDetails from "./HeaderProduct";

export default function Mac() {
    const macImages = [
        "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_performance__dh5hyac1zf8m_large_2x.jpg",
        "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg",
        "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_ease__bvgkz2zdltxy_large_2x.jpg"
    ];

    return (
        <ProductDetails
            videoSrc='https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/large_2x.mp4' 
            title="Get To Know Mac." 
            images={macImages} 
        />
    );
}