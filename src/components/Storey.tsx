import styled from "@emotion/styled";
import { useState, createRef, useEffect } from "react";
import useComponentDidMount from "../hooks/useComponentDidMount";

const StyleStorey = styled.div`
  display: flex;
  align-items: center;
  height: 98px;
  border-bottom: 1px solid var(--elevatorBorderColor--);
`;

const StyleStoreyController = styled.div`
  width: 70px;
  height: 98px;
  padding: 8px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyleButton = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid var(--elevatorBorderColor--);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: var(--elevatorBtnBgColor--);
  &:last-of-type {
    margin-top: 8px;
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: var(--elevatorBtnBgDisabledColor--);
    color: var(--elevatorBtnDisabledColor--);
  }
  &.checked {
    background-color: var(--elevatorBorderColor--);
    color: var(--elevatorBtnBgColor--);
  }
`;

const StyleStoreyCount = styled.div`
  width: 80px;
  height: 98px;
  text-align: center;
  font: 56px/98px 微软雅黑, 楷体;
`;

export interface MethodProps {
  onUp(v: number, h: number): void;
  onDown(v: number, h: number): void;
}

export interface StoreyProps extends MethodProps {
  count: number;
  open: boolean;
}

export interface StoreyItem {
  key: number;
  disabled: boolean;
}

const Storey = (props: Partial<StoreyProps>) => {
  const { count = 6, open } = props;
  const storeyRef = createRef<HTMLDivElement>();
  const [storeyList, setStoreyList] = useState<StoreyItem[]>();
  const [type, setType] = useState<keyof MethodProps>();
  // const [checked, setChecked] = useState<string>();
  const [currentFloor, setCurrentFloor] = useState<number>(1);
  const [offset, setOffset] = useState<number>();

  useComponentDidMount(() => {
    const res: StoreyItem[] = [];
    for (let index = count; index > 0; index--) {
      res.push({
        key: index,
        disabled: false,
      });
    }
    setStoreyList(res);
  });

  useEffect(() => {
    if (storeyRef) {
      // console.log("storeyRef", storeyRef);
      setOffset(storeyRef?.current?.offsetHeight as number);
    }
  }, [storeyRef]);

  const onClickHandler = (key: number, method: keyof MethodProps) => {
    // setChecked(key);
    setType(method);
    const moveFloor = key;
    const diffFloor = Math.abs(moveFloor - currentFloor);
    setCurrentFloor(moveFloor);
    props[method]?.(diffFloor, offset as number * (moveFloor - 1));
  };

  return (
    <>
      {storeyList?.map((item, index) => (
        <StyleStorey key={index} ref={storeyRef}>
          <StyleStoreyController>
            <StyleButton
              disabled={Number(item.key) === storeyList.length || item.disabled || open}
              onClick={() => onClickHandler(item.key, "onUp")}
              className={`${
                item.key === currentFloor && type === "onUp" ? "checked" : ""
              }`}
            >
              ↑
            </StyleButton>
            <StyleButton
              disabled={Number(item.key) === 1 || item.disabled || open}
              onClick={() => onClickHandler(item.key, "onDown")}
              className={`${
                item.key === currentFloor && type === "onDown" ? "checked" : ""
              }`}
            >
              ↓
            </StyleButton>
          </StyleStoreyController>
          <StyleStoreyCount>{item.key}</StyleStoreyCount>
        </StyleStorey>
      ))}
    </>
  );
};

export default Storey;
