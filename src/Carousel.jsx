import { useEffect, useState } from 'react'

let imageUrls = ["/carousel images/WhatsApp Image 2024-09-23 at 2.06.23 PM.jpeg" , "/carousel images/WhatsApp Image 2024-09-23 at 2.06.24 PM (1).jpeg" , "/carousel images/WhatsApp Image 2024-09-23 at 2.06.24 PM (2).jpeg" , "/carousel images/WhatsApp Image 2024-09-23 at 2.06.24 PM.jpeg" , "/carousel images/WhatsApp Image 2024-09-23 at 2.06.25 PM (1).jpeg"];

export default function Carousel() {
    const [ index , setIndex] = useState(0);

    useEffect(() => {
        const handler = setInterval(() => {
            setIndex(prevIndex => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
        return () => clearInterval(handler);
    }, []);

    const getPrevIndex = () => (index === 0 ? imageUrls.length - 1 : index - 1);
    const getNextIndex = () => (index === imageUrls.length - 1 ? 0 : index + 1);

  return (
    <div className='carousel-container'>
       <img src={imageUrls[getPrevIndex()]} alt="previous" className='prev' />
       <img src={imageUrls[index]} alt="current" className='curr' />    
       <img src={imageUrls[getNextIndex()]} alt="next" className='next' />
    </div>
  )
}