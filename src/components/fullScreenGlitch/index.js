import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/todo.png";
import "./glitchAnimation.scss";

export default function GlitchAnimation({
  glitchText,
  text,
  linkTo,
  children,
}) {
  return (
    <div id="app">
      <img loading="lazy" alt="DoIt logo" src={Logo}/>
        <h1 className="glitch" data-text={glitchText}>
          {glitchText}
        </h1>
        {text && <h1 id="message">{text}</h1>}
        <Link id="wrapper" to={linkTo}>
          <button id="login-btn">Login</button>
      </Link>
      {children}
    </div>
  );
}
