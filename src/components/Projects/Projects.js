import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, SliderContainer, SliderButton } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
{/* Update projects constants*/}

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <SliderContainer>
      <SliderButton onClick={goToPrevious} left>&#10094;</SliderButton>
      <Img src={images[currentIndex]} />
      <SliderButton onClick={goToNext} right>&#10095;</SliderButton>
      
      <div style={{ 
        position: 'absolute', 
        bottom: '10px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '8px',
        zIndex: 10
      }}>
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentIndex === slideIndex ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          />
        ))}
      </div>
    </SliderContainer>
  );
};

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      
      {projects.map((p, i) => {
        return(
          <BlogCard key={i}>
            {Array.isArray(p.image) ? (
              <ImageSlider images={p.image} />
            ) : (
              <Img src={p.image} />
            )}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className='card-info'>{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>
                  })}
                </TagList>
              </div>
              {(p.visit && p.visit.trim() !== '') || (p.source && p.source.trim() !== '') ? (
                <UtilityList>
                  {p.visit && p.visit.trim() !== '' && (
                    <ExternalLinks href={p.visit}>Code</ExternalLinks>
                  )}
                  {p.source && p.source.trim() !== '' && (
                    <ExternalLinks href={p.source}>Source</ExternalLinks>
                  )}
                </UtilityList>
              ) : (
                <div style={{ margin: '2.5rem 0', minHeight: '40px' }}></div>
              )}
            </div>
          </BlogCard>
        );
      })}

    </GridContainer>
  </Section>

);

export default Projects;