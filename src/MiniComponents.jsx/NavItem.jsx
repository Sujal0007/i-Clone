import React, { useState ,useContext } from 'react';
import { useNavigate } from "react-router-dom";


export default function NavItem({ label, content  }) {

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = ()=>{
        if(label ==='Store'){
          navigate('Store')
        }else if(label === 'Mac'){
          navigate('Mac')
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
