export default function TvHome(){
    return(
        <div className="tvhome">
            <h1>The future hits home.</h1>
            <h3>Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thermostats using Siri. All with the security and privacy of Apple.</h3>
            <img src="https://www.apple.com/v/tv-home/n/images/overview/hero__dbphk49ymi2q_large_2x.jpg" alt="" />
            <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop >
                <source src='https://www.apple.com/105/media/us/tv-home/2023/84f93f04-08dd-4f81-a256-75af160e981c/anim/sizzle/large_2x.mp4'/>
            </video>
        </div>
    )
}