import React, { useState ,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import HoverMenuContext, { HoverMenuProvider } from '../MenuContext';


export default function NavItem({ label, content  }) {
    
    const {isHovered, setIsHovered, isOpenMenu, setOpenMenu} = useContext(HoverMenuContext);

    // const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = ()=>{
        if(label ==='Store'){
          navigate('Store')
          setIsHovered(false);
          setOpenMenu(false)
        }else if(label === 'Mac'){
          navigate('Mac')
          setIsHovered(false);
          setOpenMenu(false)
        }else if(label === 'iPad'){
            navigate('iPad')
            setIsHovered(false);
            setOpenMenu(false)
          }else if(label === 'iPhone'){
            navigate('Iphone')
            setIsHovered(false);
            setOpenMenu(false)
          }else if(label === 'Watch'){
            navigate('Watch')
            setIsHovered(false);
            setOpenMenu(false)
          }else if(label === 'AirPods'){
            navigate('AirPods')
            setIsHovered(false);
            setOpenMenu(false)
          }else if(label === 'TV & Home'){
            navigate('TvHome')
            setIsHovered(false);
            setOpenMenu(false)
          }else if(label === 'Entertainment'){
            navigate('Entertainment')
            setIsHovered(false);
            setOpenMenu(false)
          }else if(label === 'Support'){
            navigate('Support')
            setIsHovered(false);
            setOpenMenu(false);
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
