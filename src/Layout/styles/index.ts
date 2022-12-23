import styled from "@emotion/styled";

const sideBarWidth = `220px`;


export const Container = styled.div<{ rtl: any, isClose: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${({isClose, rtl}) => !rtl ? (isClose ? `${sideBarWidth}` : `auto`) : "auto"};
  margin-right: ${({isClose, rtl}) => rtl ? (isClose ? `${sideBarWidth}` : `auto`) : "auto"};
  min-height: 100vh;
  min-width: ${({isClose}) => !isClose ? `100%` : `calc(100% - ${sideBarWidth})`};

  @media (max-width: 768px) {
    margin-left: ${({isClose, rtl}) => !rtl ? (!isClose ? `${sideBarWidth}` : `auto`) : "auto"};
    margin-right: ${({isClose, rtl}) => rtl ? (!isClose ? `${sideBarWidth}` : `auto`) : "auto"};
    width: ${({isClose}) => isClose ? `100%` : `calc(100% - ${sideBarWidth})`};
  }

  @media (max-width: 450px) {
    display: ${({isClose}) => !isClose && `none`};
  }
`;

export const Main = styled.main<{ isClose: boolean }>`
  display: flex;
  padding: 60px 0 0 0;
  width: 100%;
  @media (max-width: 680px) {
    filter: ${({isClose}) => !isClose && `blur(15px)`};
    -webkit-filter: ${({isClose}) => !isClose && `blur(15px)`};
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  padding: 20px 10px 10px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`