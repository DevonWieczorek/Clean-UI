import React from 'react';
import {BrowserView} from "react-device-detect";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const NavItems = () => {
    return(
        <>
            <BrowserView>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item border-bottom active">
                        <Search />
                    </li>
                </ul>
            </BrowserView>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item border-bottom active">
                    <NavLink to="/" className="nav-link truncate" activeClassName="active">Nav 1</NavLink>
                </li>
                <li className="nav-item border-bottom">
                    <NavLink to="/" className="nav-link truncate" activeClassName="active">
                        Nav 2 with very very very long name goes here
                    </NavLink>
                </li>
                <li className="nav-item border-bottom">
                    <NavLink to="/" className="nav-link" activeClassName="active">
                        Nav 3 also has a very very long name but wraps instead
                    </NavLink>
                </li>
                <li className="nav-item border-bottom truncate">
                    <div className="panel-group">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <a className="nav-link truncate" data-toggle="collapse" href="#collapse1">
                                Nav with Subnav
                            </a>
                        </div>
                        </div>
                        <div id="collapse1" className="panel-collapse collapse">
                          <div className="panel-body">
                              <ul className="navbar-nav">
                                  <NavLink to="/" className="nav-link border-bottom truncate" activeClassName="active">Sub 1</NavLink>
                                  <NavLink to="/" className="nav-link border-bottom truncate" activeClassName="active">Sub 2</NavLink>
                                  <NavLink to="/" className="nav-link border-bottom truncate" activeClassName="active">Sub 3 Has a very long name</NavLink>
                              </ul>
                          </div>
                        </div>
                      </div>
                  </div>
                </li>
                <li className="nav-item border-bottom">
                    <NavLink to="/" className="nav-link truncate" activeClassName="active">Sub 1</NavLink>
                </li>
            </ul>
        </>
    );
}

export default NavItems;
