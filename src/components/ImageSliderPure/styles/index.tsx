import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  touch-action: pan-y;
`;

export const SwiperList = styled.ul`
  display: flex;
  width: 100%;
  transition: transform 0.4s ease-out;
`;

export const SwiperIndicator = styled.ul`
  display: flex;
  justify-content: center;
  margin: 15px 0 0 0;
`;

export const SwiperIndicatorItem = styled.li<{ idx, currentIndex }>`
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({idx, currentIndex}) => currentIndex === idx ? "#777" : "#cccccc"};
`;
