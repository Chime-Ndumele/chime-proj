import React from "react";
import reactLogo from '../images/icon.jpg'
import slackIcon from '../images/icons8-slack-new-48.png'
import gitIcon from '../images/github.png'
import zuriIcon from '../images/zuri.png'
import ingressIcon from '../images/ingressive.png'

export default function Main(){
    return(
        <div className="container">
            <div className="container1">
                <div className="container2">
                <img src={reactLogo} className='icon-1' />
                <h5>Chime Ndumele</h5>
                </div>
                <div className="container3">
                    <div className="Twitter"><a href="https://twitter.com/Davehx_cn/"><button  id="btn-1">Twitter Link</button></a></div>
                    <div className="zuteam"><a href="https://training.zuri.team/"><button  id="btn-1">Zuri Team</button></a></div>
                    <div className="zubook"><a href="https://books.zuri.team/"><button id="btn-1">Zuri Books</button></a></div>
                    <div className="pybook"><a href="https://books.zuri.team/python-for-beginners?ref_id=<Chime Ndumele>"><button id="btn-1">Python Books</button></a></div>
                    <div className="back"><a href="https://backgroud.zuri.team/"><button id="btn-1">Background check for coder</button></a></div>
                    <div className="debook"><a href="https://books.zuri.team/design-rules/"><button id="btn-1">Design Books</button></a></div>
                    <div className="container4">
                    <img src={slackIcon} className='slack-icon'/>
                    <img src={gitIcon} className='git-icon'/>
                </div>
                <div className="container5">
                <img src={zuriIcon} className='zuri-con'/>
                <h6 className="text-1">HNG Internship 9 Frontend Task </h6>
                <img src={ingressIcon} className='ingress-icon'/>
                </div>
                </div>
                
            </div>
        </div>
    )
}