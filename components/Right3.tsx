import { useCallback } from "react";
import { increase, decrease, setTarget } from "../redux/slices/counterSlice";
import { AppDispatch, useAppDispatch } from "../redux/store";

function Right3(props: any) {
  /* 
    Dispatch : Redux State를 '변경' 시키는 방법
    사용법 : dispatch(actionFunction(...param));
  */
  const dispatch: AppDispatch = useAppDispatch();

  const upEvent = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const downEvent = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  const targetEvent = useCallback(
    (num: number) => {
      dispatch(setTarget(num));
    },
    [dispatch]
  );

  return (
    <div>
      Right3
      <br />
      <button onClick={upEvent}>+</button>
      <button onClick={downEvent}>-</button>
      <button
        onClick={() => {
          targetEvent(5);
        }}
      >
        To 5
      </button>
    </div>
  );
}

export default Right3;
