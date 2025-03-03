import React, { useState, useEffect, useRef } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, SliderContainer, SliderButton, PaginationContainer, PaginationDots, PaginationDot, SlideIndicator } from './ProjectsStyles';
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

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current && window.innerWidth <= 640) { // Assuming sm breakpoint is around 640px
        const scrollLeft = gridRef.current.scrollLeft;
        const cardWidth = gridRef.current.querySelector('.blog-card').offsetWidth;
        const newIndex = Math.round(scrollLeft / (cardWidth + 32)); // 32px for the gap (2rem)
        
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
          setActiveIndex(newIndex);
        }
      }
    };

    const gridElement = gridRef.current;
    if (gridElement) {
      gridElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (gridElement) {
        gridElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeIndex]);

  const scrollToCard = (index) => {
    if (gridRef.current && window.innerWidth <= 640) {
      const cardWidth = gridRef.current.querySelector('.blog-card').offsetWidth;
      gridRef.current.scrollTo({
        left: index * (cardWidth + 32), // 32px for the gap (2rem)
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <PaginationContainer>
        <PaginationDots>
          {projects.map((_, i) => (
            <PaginationDot 
              key={i} 
              active={i === activeIndex} 
              onClick={() => scrollToCard(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </PaginationDots>
      </PaginationContainer>
      <GridContainer ref={gridRef}>
        {projects.map((p, i) => {
          return(
            <BlogCard key={i} className="blog-card">
              {Array.isArray(p.image) ? (
                <ImageSlider images={p.image} />
              ) : (
                <Img src={p.image} />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: '1 1 auto' }}>
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
};

export default Projects;