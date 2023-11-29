import styled from "@emotion/styled";
import Storey from "./Storey";

const StyleStoreyZone = styled.div`
  width: auto;
  height: 100%;
`;

export interface StoreyZoneProps {
  onUp(v: number, h: number): void;
  onDown(v: number, h: number): void;
  open: boolean;
}

const StoreyZone = (props: Partial<StoreyZoneProps>) => {
  const { open, onUp, onDown } = props;
  return (
    <StyleStoreyZone>
      <Storey open={open} count={8} onUp={(v: number, h: number) => onUp?.(v, h)} onDown={(v: number, h: number) => onDown?.(v, h)}></Storey>
    </StyleStoreyZone>
  );
};

export default StoreyZone;
