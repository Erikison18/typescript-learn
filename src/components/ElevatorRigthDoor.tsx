import { StyleProps } from "../type/style";
import { StyleRightDoor } from "./Door";

export interface ElevatorRigthDoorProps extends StyleProps {
  toggle: boolean;
}

const ElevatorRigthDoor = (props: Partial<ElevatorRigthDoorProps>) => {
  const { style, toggle } = props;
  return <StyleRightDoor style={style} toggle={toggle}></StyleRightDoor>;
};

export default ElevatorRigthDoor;
