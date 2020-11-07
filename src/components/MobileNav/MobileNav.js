import React from "react"
import DarkModeToggle from "../DarkModeToggle"
import SiteLogo from "../SiteLogo"
import "styled-components/macro"

const Navbar = () => {
  return (
    <div>
      <div
        css={`
          position: fixed;
          z-index: 4;
          margin-left: 20px;
          top: 17px;
        `}
      >
        <DarkModeToggle
          css={`
            position: fixed;
            top: 10px;
            z-index: 5;
          `}
        />
      </div>
      <div
        css={`
          position: fixed;
          z-index: 6;
          margin-left: -32px;
          margin-top: 12px;
          left: 50%;
        `}
      >
        <SiteLogo />
      </div>

      <div
        css={`
          /* header */
          .header {
            background: var(--bg);
            box-shadow: 1px 1px 4px 0 var(--shadow);
            position: fixed;
            left: 0;
            width: 100%;
            z-index: 1;
          }

          .header ul {
            text-align: center;
            width: 100%;
            margin: auto;
            padding: 0;
            list-style: none;
            overflow: hidden;
            background: var(--bg);
          }

          .header li a {
            display: block;
            padding: 10px 10px;
            text-decoration: none;
          }

          .header li a:hover,
          .header .menu-btn:hover {
            background-color: var(--shadow);
          }

          /* menu */

          .header .menu {
            clear: both;
            max-height: 0;
            transition: max-height 0.2s ease-out;
          }

          /* menu icon */

          .header .menu-icon {
            cursor: pointer;
            display: inline-block;
            float: right;
            padding: 28px 20px;
            position: relative;
            user-select: none;
          }

          .header .menu-icon .navicon {
            background: var(--logo);
            display: block;
            height: 2px;
            position: relative;
            transition: background 0.2s ease-out;
            width: 18px;
          }

          .header .menu-icon .navicon:before,
          .header .menu-icon .navicon:after {
            background: var(--logo);
            content: "";
            display: block;
            height: 100%;
            position: absolute;
            transition: all 0.2s ease-out;
            width: 100%;
          }

          .header .menu-icon .navicon:before {
            top: 5px;
          }

          .header .menu-icon .navicon:after {
            top: -5px;
          }

          /* menu btn */

          .header .menu-btn {
            display: none;
          }

          .header .menu-btn:checked ~ .menu {
            max-height: 240px;
          }

          .header .menu-btn:checked ~ .menu-icon .navicon {
            background: transparent;
          }

          .header .menu-btn:checked ~ .menu-icon .navicon:before {
            transform: rotate(-45deg);
          }

          .header .menu-btn:checked ~ .menu-icon .navicon:after {
            transform: rotate(45deg);
          }

          .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
          .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
            top: 0;
          }
        `}
      >
        <div className="header">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/tags">Tags</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
