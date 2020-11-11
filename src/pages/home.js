import React from "react"

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <div className="first-container">
          <text className="transparent-word">fullstack</text>
          <text className="transparent-word">Software Engineer</text>
        </div>

        <div className="second-container">
          <p>BRANDO</p>
        </div>
        <div className="third-container">
          <p>JUBERD</p>
        </div>
        <div className="fourth-container">
          <text className="transparent-word">frontendbackend</text>
        </div>
      </div>
      <div className="home-right">
        <div className="button-to-projects">
          <div>Projects</div>
          <div>{">"}</div>
        </div>
      </div>
    </div>
  )
}