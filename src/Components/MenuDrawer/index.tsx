import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SvgSprite from '../SvgSprite';
import { Modal } from '../Modal';
import { OAuthLogout } from '../OAuthControls';
import { CancelButton } from '../Buttons';
import AppLogo from '../../Assets/Images/logo.svg';
import './menudrawer.css';
import { useAuth0 } from "@auth0/auth0-react";

interface MenuDrawerItemProps {
    title: string,
    path: string,
    icon: string,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
};

const MenuDrawerItem: React.FC<MenuDrawerItemProps> = (props) => {
    return (
        <li className="menu-drawer-item">
            <Link to={props.path} onClick={props.onClick} >
                <SvgSprite icon={props.icon} width={24} />
                <h4>{props.title}</h4>
                <SvgSprite icon="next" width={16} />
            </Link>
        </li>
	)
}


interface MenuDrawerProps {
    open: boolean,
    toggleDrawer: (event: React.MouseEvent<HTMLElement>) => void,
};

const MenuDrawer: React.FC<MenuDrawerProps> = (props) => {

    const { isAuthenticated, user } = useAuth0();

    const [open, setOpen] = useState("");
    const [showLogout, setShowLogout] = useState(false);

    useEffect(() => {
        (props.open) ? setOpen("open") : setOpen("");
    });

    const logoutHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowLogout(!showLogout);
    }
    

    return (
        <>
            <div className={`menu-drawer-curtain curtain ${open}`}  onClick={props.toggleDrawer} ></div>
            <aside className={`menu-drawer ${open}`}>
                <header onClick={props.toggleDrawer} >
                    <img src={AppLogo} alt="Application Logo" className="auth-logo" />
                    <h1>Application Name</h1>
                    <SvgSprite icon="close" width={18} />
                </header>
                <ul>
                    {isAuthenticated &&
                        <li className="profile">
                            <a href="/profile">
                                <div>
                                    <SvgSprite icon="avatar" width={32} />
                                </div>
                                <h4>
                                    <span>{user.name}</span>
                                    <span>{user.email}</span>
                                </h4>
                                <div>
                                    <SvgSprite icon="next" width={16}/>
                                </div>
                            </a>
                        </li>
                    }
                    { props.children }
                    {isAuthenticated &&
                        <li className="menu-drawer-item" onClick={logoutHandler}>
                            <a href="/logout">
                                <SvgSprite icon="logout" width={24} />
                                <h4>Logout</h4>
                            </a>
                        </li>
                    }
                </ul>
            </aside>
            
            {showLogout &&
                <Modal onDismiss={logoutHandler} className="login" >
                    <header>Are you sure you want to logout?</header>
                    <div>
                        
                    </div>
                    <footer>
                        <CancelButton  onClick={logoutHandler} />
                        <OAuthLogout />
                    </footer>
                </Modal>
            }
        </>
	)
}

export { MenuDrawer, MenuDrawerItem };
