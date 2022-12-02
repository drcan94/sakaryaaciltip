import styled from "@emotion/styled";
import {MD_600, GRAY_100} from "../../colors";
import React from "react";

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 6px;
  right: -7px;
  min-width: 15px;
  height: 15px;
  padding: 0 3px;
  border-radius: 15px;
  color: ${GRAY_100};
  background: ${MD_600};
  font-size: 10px;
  font-weight: 500;
`;

export default function NotificationCounter({
                                                counter,
                                                ...props
                                            }) {
    return (
        <Circle {...props}>{counter}</Circle>
    );
}
