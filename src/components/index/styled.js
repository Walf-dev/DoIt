import styled from "styled-components";

import EmblaCarouselReact from "embla-carousel-react";

export const EmblaReact = styled(EmblaCarouselReact)``;
export const EmblaReactContainer = styled.div`
  cursor: grab;
  display: flex;
`;
export const EmblaReactSlide = styled.div`
  flex: 0 0 100%;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #0a0a0a;
`;
export const FooterLink = styled.a`
  text-decoration: none;
  color: #d7e3fc;
  padding: 10px 32px;
  width: 150px;
  min-width: 100px;
  text-align: center;

  transition: var(--transition);
  &:hover {
    background: #2b2d42;
  }
`;
