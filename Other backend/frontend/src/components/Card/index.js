import React from 'react';
import { Progress } from 'antd';

import './style.scss';
import image from './cotton.png'

const Card = (props) => {
  return (
    <div className="card">
      <div>
        {/* <Progress
          type="circle"
          percent={props.percent}
          strokeColor={{
            '0%': '#A643F4',
            '100%': 'rgba(249, 89, 166, 0.9)',
          }}
          strokeWidth={8}
          strokeLinecap="round"
          width={100}
        /> */}
        <img src={image} width={100} height={70} />
        <div style={{marginBottom:'10px'}}>
          <center>
          <b>Food Bank</b>
          </center>
        </div>
        <div className="itemsneeded">
          <span>3 Miles</span> <br /> <span> 3 Blanket <br /> Needed</span>

          {/* <span>{props.units} {props.item}</span> <br/> <span> needed</span> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
