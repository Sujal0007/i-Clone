import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

export default function Entertainment(){
    return(
        <div className="entertain">
                <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop >
                <source src='https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/music/large.mp4'/>
            </video>
                    
                   
        <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop >
                <source src='https://www.apple.com/105/media/us/services/2024/416d7ef9-e5f1-4bdb-9443-3b7a1958236f/anim/hero/large.mp4'/>
            </video>
        </div>

    )
}
