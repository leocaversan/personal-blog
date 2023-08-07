import React from "react";
import './index.css';

const Header = () => {
    return (
        <div className="header__container">
            <div>
                <img
                    src="https://game.capcom.com/manual/MHW_PC/img/steam/controller/key-CrBtn.png"
                    alt="suspense menus"
                    onClick={() => { console.log('clicked') }} />
            </div>
            <div className="header__central-menu">
                <p>
                    code's
                </p>
                <p>
                    Contat me
                </p>
                <p>
                    
                </p>
                <p>
                    teste
                </p>
            </div>
            <div className="header__img_icon">
                {/* <img 
                    src="" 
                    alt="profilePicture"
                    className="header__img_icon" /> */}
            </div>
        </div>
    )
}

export default Header;