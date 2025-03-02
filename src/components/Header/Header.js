import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFile } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

{/* UPDATE THIS PART!! Remove legacyBehavior*/}

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <a style= {{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <FaHome size="3rem" />
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href='https://www.github.com/HFyilmaz'>
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/hasanfiratyilmaz'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      <SocialIcons href='https://www.instagram.com/hasanfiratyilmaz'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>

      <SocialIcons href='/documents/HFY_resume.pdf'>
        <AiFillFile size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
