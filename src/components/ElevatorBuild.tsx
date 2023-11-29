import styled from "@emotion/styled";
import { StyleProps } from "../type/style";
import { useState } from "react";
import ElevatorShaft from "./ElevatorShaft";
import StoreyZone from "./StoreyZone";

const StyleBuild = styled.div`
  width: 350px;
  max-width: 100%;
  min-height: 500px;
  border: 6px solid var(--elevatorBorderColor--);
  overflow: hidden;
  display: flex;
  margin: 3vh auto;
`;

const ElevatorBuild = () => {
  const [ElevatorStyle, setElevatorStyle] = useState<StyleProps["style"]>();
  const [doorStyle, setDoorStyle] = useState<StyleProps["style"]>();
  const [open, setOpen] = useState<boolean>(false);

  const move = (diffFloor: number, offset: number) => {
    console.log(diffFloor, offset, "move");
    setElevatorStyle({
      transitionDuration: diffFloor + "s",
      bottom: `${offset}px`,
    });
    setDoorStyle({
      animationDelay: diffFloor + "s",
    });
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000 * diffFloor + 3000);
  };

  return (
    <StyleBuild>
      <ElevatorShaft
        ElevatorStyle={ElevatorStyle}
        LeftDoorStyle={doorStyle}
        RigthDoorStyle={doorStyle}
        leftToggle={open}
        rightToggle={open}
      ></ElevatorShaft>
      <StoreyZone
        onUp={(v: number, h: number) => move?.(v, h)}
        onDown={(v: number, h: number) => move?.(v, h)}
        open={open}
      ></StoreyZone>
    </StyleBuild>
  );
};

export default ElevatorBuild;
