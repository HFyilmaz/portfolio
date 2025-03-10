import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  transition: all 0.5s ease;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
grid-auto-rows: 1fr;
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 1rem;
  padding: 2rem;
  gap: 2rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  align-items: stretch;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
}
`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 450px;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    min-width: 300px;
    width: 90vw;
    height: auto;
    min-height: 600px;
    margin-right: 1rem;
    scroll-snap-align: center;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0rem 1rem;
    font-size: 2.75rem;
}
`;

export const Hr = styled.hr`
  width: 200px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 30px;
  color: #e4e6e7;
  font-size: 1.8rem;
  text-align: left;
  flex-grow: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0rem 2rem;
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2.5rem 0;
  height: 40px;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 0;
`
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(107, 48, 48, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(107, 48, 48, 0.5);
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`
export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  background-color: #0F1624;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    img {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const PaginationContainer = styled.div`
  display: none;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0;
    width: 100%;
    padding: 0 2rem;
  }
`;

export const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 0.5rem;
`;

export const PaginationDot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'};
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    transform: scale(1.2);
    background-color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
  }
`;