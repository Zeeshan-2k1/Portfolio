import React from "react";
import Terminal from "terminal-in-react";
import Image from "../images/Zeeshan.jpeg";

export default function MyTerminal() {
  return (
    <Terminal
      color="green"
      backgroundColor="black"
      barColor="white"
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
      msg="Use this terminal for further details. You can get all commands using 'help'."
      commands={{
        profile: () =>
          "Hello World, I am Zeeshan Ashraf a sophomore at BIT Sindri, Jharkhand India. Currently pursuing B.Tech in Electronics and Communications Engineering",
        github: () => {
          window.location.assign("https://github.com/Zeeshan-2k1");
        },
        fb: () => {
          window.location.assign(
            "https://www.facebook.com/profile.php?id=100005133649365"
          );
        },
        ln: () => {
          window.location.assign(
            "https://www.linkedin.com/in/zeeshan-ashraf-38897b1a6"
          );
        },
        insta: () => {
          window.location.assign("https://www.instagram.com/__zeero_cool__/");
        },

        resume: () => (
          <div>
            <img src={Image} alt="Profile"></img>
            <h1>Zeeshan Ashraf</h1>
            <h3>Student</h3>
            <h4>Mobile No.: 7004858548</h4>
            <h4>Email Id: ashraf2k1zeeshan@gmail.com</h4>

            <h2>Experience: </h2>
            <ul>
              <li>Intern at La Polo International</li>
              <li>Member at Hackathon and Coding Club</li>
            </ul>
            <h2>Education: </h2>
            <ul>
              <li>
                B.Tech in Electronics and Communications Engineering, BIT
                Sindri. (2019-2023)
              </li>
              <li>
                Higher Secondary Education, Science with Mathematics.
                (2017-2019)
              </li>
            </ul>
            <h2>Skills: </h2>
            <p>
              C++ || JavaScript || Python || Shell || ReactJS || React Native ||
              MongoDB || SQL || Linux
            </p>
            <p>You can download my resume from the link below</p>
            <a
              href="https://docs.google.com/document/d/1Xdsgurz-3poCa5rRmW7qju79vEicd7h2OLzPJ3KHs2U/edit?usp=sharing"
              download
            >
              Download
            </a>
          </div>
        ),
        lang: () => (
          <ul>
            <li>C/C++</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Shell</li>
          </ul>
        ),
        skills: () => (
          <ul>
            <li>React JS</li>
            <li>React Native</li>
            <li>Linux</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Django</li>
          </ul>
        ),
        interest: () =>
          "Web Development || App Development || System Development",

        contact: () => (
          <div>
            <h4>Mobile No.: 7004858548</h4>
            <h4>Email Id: ashraf2k1zeeshan@gmail.com</h4>
          </div>
        ),
        socials: () => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a
              href="https://github.com/Zeeshan-2k1"
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "skyblue" }}
            >
              Github
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100005133649365"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/zeeshan-ashraf-38897b1a6"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/__zeero_cool__/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        ),
      }}
      descriptions={{
        profile: "Shows Profile",
        github: "Shows Github Profile",
        fb: "Shows Facebook Profile",
        ln: "Shows Likendin Profile",
        insta: "Shows Instagram Profile",
        resume: "Shows resume",
        lang: "Shows Language",
        skills: "Shows Skills",
        interest: "Shows Interest",
        contact: "Shows Contact Info",
        socials: "Shows all social medias",
      }}
      closedTitle={
        <h4 style={{ color: "white", textAlign: "center" }}>
          OOPS! You closed the window.
        </h4>
      }
      closedMessage={
        <h4 style={{ color: "white", textAlign: "center" }}>
          Click on the icon to reopen.
        </h4>
      }
    />
  );
}
