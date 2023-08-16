import React, { useState } from "react";
import style from "./Header.module.css";
import Topic from "./Topic";
import ImgIcon from "./ImgIcon";

const Header = () => {

    const [code, setCode] = useState(false)
    const [contact, setContact] = useState(false)
    const [About, setAbout] = useState(false)
    const [projects, setProjects] = useState(false)

    return (
        <div className={style.header__container}>
            <ImgIcon
                src="https://game.capcom.com/manual/MHW_PC/img/steam/controller/key-CrBtn.png"
                alt="suspense menus"
                onClick={() => { console.log('clicked') }} />

            <div className={style.header__central_menu}>
                <Topic
                    description={"Code's"}
                    onClick={
                        () => { setCode(true) }} />
                <Topic
                    description={"Contact's"}
                    onClick={
                        () => { setContact(true) }} />
                <Topic
                    description={"About's"}
                    onClick={
                        () => { setAbout(true) }} />
                <Topic
                    description={"Project's"}
                    onClick={
                        () => { setProjects(true) }} />
            </div>

            <ImgIcon
                src={"https://media.licdn.com/dms/image/C4E03AQGmQkiBo3otfA/profile-displayphoto-shrink_800_800/0/1571064705275?e=2147483647&v=beta&t=PUnhmIxH-SoVChwvovqLicFzKIteq8IYDm-y1_0N3Hk"}
                alt={"profilePicture"}
                onClick={(() => { console.log('clicked') })} />

        </div>
    )
}

export default Header;