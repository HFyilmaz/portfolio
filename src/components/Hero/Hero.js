import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { UtilityList } from '../Projects/ProjectsStyles';
import { getAssetPath } from '../../utils/assetPrefix';

{/* Buttons are not designed responsively! */}

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, there! <br />
        I am Hasan Fırat
      </SectionTitle>
      <SectionText>
        I am a senior computer science student at Sabancı University 
        with a strong passion for continuous learning and self-improvement. 
      </SectionText>

      <ul style={{display: 'flex', justifyContent: 'space-evenly', margin: '1rem 0'}}>
          <Button alt onClick={() => window.location.href= getAssetPath("/documents/HFY_resume.pdf")}>Resume</Button>
          <Button alt onClick={() => window.location.href= getAssetPath("/documents/HFY_transcript.pdf")}>Transcript</Button>
      </ul>

    </LeftSection>
  </Section>
);

export default Hero;