export default function ProductDetails({ videoSrc, title, images }) {
    return (
        <>
            <div className="store">
                <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop>
                    <source src={videoSrc} />
                </video>
                <h1>{title}
                    <div className="store-img">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`product-img-${index}`} />
                        ))}
                    </div>
                </h1>
            </div>
        </>
    );
}