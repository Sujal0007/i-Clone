export default function Store(){
    return(
        <>
        <div className="store">
            <div>
                <h1><span>Store.</span> The best way to buy the</h1>
                <h1>products you love.</h1>
            </div>
            
        <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop >
                <source src='public/large_2x.mp4'/>
            </video>
            <div className="store-img">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-16-pro-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1726165763260" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724095131742" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725661572513" alt="" />
        </div>
        </div>
        </>
    )
}