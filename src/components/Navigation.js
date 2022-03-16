import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/me.png" alt="profil-pic" />
                    <h3>Karim ABID</h3>
                </div>
            </div>
            
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive" >
                            <i className="fas fa-home">
                                <span>Accueil</span>
                            </i>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive" >
                            <i className="fas fa-mountain">
                                <span>Compétences</span>
                            </i>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive" >
                            <i className="fas fa-images">
                                <span>Portfolio</span>
                            </i>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive" >
                            <i className="fas fa-address-book">
                                <span>Contact</span>
                            </i>
                        </NavLink>
                    </li>
                </ul>

                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a 
                                href="https://www.google.fr" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="fab fa-linkedin"
                                />
                        </li>

                        <li>
                            <a 
                                href="https://www.google.fr" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="fab fa-github"
                                />
                        </li>

                        <li>
                            <a 
                                href="https://www.google.fr" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="fab fa-twitter"
                                />
                        </li>

                        <li>
                            <a 
                                href="https://www.google.fr" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="fab fa-codepen"
                                />
                        </li>
                    </ul>

                    <div className="signature">
                        <p>Karim ABID - 2021</p>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Navigation;