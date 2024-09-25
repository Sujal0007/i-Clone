import React, { useState ,useContext } from 'react';
import { useNavigate } from "react-router-dom";


export default function NavItem({ label, content  }) {

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = ()=>{
        if(label ==='Store'){
          navigate('Store')
          setIsHovered(false);
        }else if(label === 'Mac'){
          navigate('Mac')
        }else if(label === 'iPad'){
            navigate('iPad')
          }else if(label === 'iPhone'){
            navigate('Iphone')
          }else if(label === 'Watch'){
            navigate('Watch')
          }else if(label === 'AirPods'){
            navigate('AirPods')
          }else if(label === 'TV & Home'){
            navigate('TvHome')
          }else if(label === 'Entertainment'){
            navigate('Entertainment')
          }else if(label === 'Support'){
            navigate('Support')
          }
    }

  return (
    <li className="liitem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleClick}>
      {label}
      {isHovered && (
        <div className="hover-content animate__animated animate__fadeIn" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <div>
          {content.listOne.map((item , i)=>{
            return  <h1>{item}</h1>
          })}
          </div>
          <div>
          {content.listTwo.map((item , i)=>{
            return (
                <ul>
                    <li>{item}</li>
                </ul>
            )
          })}
          </div>
          <div>
          {content.listThree.map((item , i)=>{
            return (
                <ul>
                    <li>{item}</li>
                </ul>
            )
          })}
          </div>
          
        </div>
      )}
    </li>
  );
}
