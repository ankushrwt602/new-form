import React from 'react';
import logo from '../Assets/Images/site-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function HeaderComponent(){
    return(
        <>
           <header className='header' id='header'>
              <div className="container">
                 <div className="nav">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className='nav-list'>
                        <table>
                            <tr>
                                <th><FontAwesomeIcon icon={faGear} /></th>
                            </tr>
                            <tr>
                                <th><FontAwesomeIcon icon={faUser} /></th>
                                <th>Employee</th>
                            </tr>
                        </table>
                    </div>
                 </div>
              </div>
           </header>          
        </>
    );
}

export default HeaderComponent;