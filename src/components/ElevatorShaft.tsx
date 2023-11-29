import styled from "@emotion/styled";
import { StyleProps } from "../type/style";
import Elevator from "./Elevator";

const StyleShaft = styled.div`
  width: 200px;
  position: relative;
  border-right: 2px solid var(--elevatorBorderColor--);
  padding: 1px;
`;

export interface ElevatorShaftProps {
  LeftDoorStyle: StyleProps["style"];
  RigthDoorStyle: StyleProps["style"];
  ElevatorStyle: StyleProps["style"];
  leftToggle: boolean;
  rightToggle: boolean;
}

const ElevatorShaft = (props: Partial<ElevatorShaftProps>) => {
  const { LeftDoorStyle, RigthDoorStyle, ElevatorStyle, leftToggle, rightToggle } = props;
  return (
    <StyleShaft>
      <Elevator
        style={ElevatorStyle}
        LeftDoorStyle={LeftDoorStyle}
        RigthDoorStyle={RigthDoorStyle}
        leftToggle={leftToggle}
        rightToggle={rightToggle}
      ></Elevator>
    </StyleShaft>
  );
};

export default ElevatorShaft;
