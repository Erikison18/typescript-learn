import styled from "@emotion/styled"
import { StyleProps } from "../type/style"
import ElevatorLeftDoor from "./ElevatorLeftDoor"
import ElevatorRigthDoor from "./ElevatorRigthDoor"

const StyleElevator = styled.div`
  height: 98px;
  background: url("https://www.eveningwater.com/my-web-projects/js/26/img/6.jpg") center / cover no-repeat;
  border: 1px solid var(--elevatorBorderColor--);
  width: calc(100% - 2px);
  padding: 1px;
  transition-timing-function: ease-in-out;
  position: absolute;
  left: 1px;
  bottom: 1px;
`

export interface ElevatorProps {
  LeftDoorStyle: StyleProps['style'];
  RigthDoorStyle: StyleProps['style'];
  style: StyleProps['style'];
  leftToggle: boolean;
  rightToggle: boolean;
}

const Elevator = (props: Partial<ElevatorProps>) => {
  const { style, LeftDoorStyle, RigthDoorStyle, leftToggle, rightToggle } = props
  return (
    <StyleElevator style={style}>
      <ElevatorLeftDoor style={LeftDoorStyle} toggle={leftToggle}></ElevatorLeftDoor>
      <ElevatorRigthDoor style={RigthDoorStyle} toggle={rightToggle}></ElevatorRigthDoor>
    </StyleElevator>
  )
}

export default Elevator