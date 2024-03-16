import React from "react";
import { Tab , Nav, NavLink} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";

import '../assets/css/HomeTabs.css'


import { FaHotjar } from "react-icons/fa";
import { MdOutlineSportsEsports } from "react-icons/md";
import { GiStrikingBalls } from "react-icons/gi";
import { GiPokerHand } from "react-icons/gi";
import { GiCirclingFish } from "react-icons/gi";

import slot1 from '../assets/img/HomeTabs/slot1.png'
import slot2 from '../assets/img/HomeTabs/slot2.png'
import slot3 from '../assets/img/HomeTabs/slot3.png'

import casino1 from '../assets/img/HomeTabs/casino.png'
import casino2 from '../assets/img/HomeTabs/casino2.png'
import casino3 from '../assets/img/HomeTabs/casino3.png'
import casino4 from '../assets/img/HomeTabs/casino4.png'

import fish1 from '../assets/img/HomeTabs/fish1.png'
import fish2 from '../assets/img/HomeTabs/fish2.png'
import fish3 from '../assets/img/HomeTabs/fish3.png'
import fish4 from '../assets/img/HomeTabs/fish4.png'
import fish5 from '../assets/img/HomeTabs/fish5.png'

import lotto1 from '../assets/img/HomeTabs/lotto1.png'
import lotto2 from '../assets/img/HomeTabs/lotto2.png'

const HomeTabs = ()=>{

    const tabs = [
        {
            id:1,img:FaHotjar,title:'Hot Game'
        },
        {
            id:2,img:GiPokerHand,title:'Slot'
        },
        {
            id:3,img:MdOutlineSportsEsports,title:'Live Casino'
        },
        {
            id:4,img:GiStrikingBalls,title:'Lotto'
        },
        {
            id:5,img:GiCirclingFish,title:'Fish'
        },
    ];

    const contentTabs=[
        // {id:1,imgs:[sport1,sport2,sport3,sport4],title:'All Games'},
        {id:1,imgs:[casino1,slot1,fish1],title:'Hot Games'},
        {id:2,imgs:[slot1,slot2,slot3],title:'Slots'},
        //   {id:4,imgs:[esport1,esport1,esport1],title:'E-Sports'},
          {id:3,imgs:[casino1,casino2,casino3,casino4],title:'Live Casinos'},
          {id:4,imgs:[lotto1,lotto2],title:'Lotto'},
          {id:5,imgs:[fish1,fish2,fish3,fish4,fish5],title:'Fish Hunter '}
          // {id:6,imgs:[cock1,cock1,cock1]},
          // {id:7,imgs:[horse1,horse1,horse1]}
      ]
    return (
       <div style={{marginBottom:'300px'}}>
         <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
        {/* <Row>
          <Col sm={3}> */}
            <Nav variant="pills" className="d-flex justify-content-center">
                {
                    tabs.map((tab)=>{
                        return (
                            <Nav.Item className="m-2">
                                <Nav.Link eventKey={tab.id} className="text-center tabStyles" style={{background:'#b81212',color:'#ddd'}}>
                                    < tab.img size={30} className="me-2"/>
                                    <p>{tab.title}</p>
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })
                }
              
            </Nav>
          {/* </Col>
          <Col sm={9}> */}
            <Tab.Content >
                {
                    contentTabs.map((content)=>{
                        return (
                            <Tab.Pane eventKey={content.id} className="mx-sm-5 mx-1">
                                <h3 className='fw-bold'>{content.title}</h3>
                                
                                <div className="d-flex flex-wrap">
                                {
                                    content.imgs.map((img)=>{
                                        return  (
                                            <NavLink to={'/'} >
                                                <img  src={img} className="imgStyles m-2" /> 
                                            </NavLink>
                                            
                                        );
                                    })
                                }
                                </div>
                            </Tab.Pane>
                        );
                    })
                }
              
            </Tab.Content>
          {/* </Col>
        </Row> */}
      </Tab.Container>
       </div>
    );
}

export default HomeTabs