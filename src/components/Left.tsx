import { countUp, countDown, setTarget } from "../store/slices/counterSlice";
import { AppDispatch, useAppDispatch } from "../store/store";

const Left1 = () => {
  console.log("Rendering : Left1");

  return (
    <div>
      Left1
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  console.log("Rendering : Left2");

  return (
    <div>
      Left2
      <Left3 />
    </div>
  );
};

/* 
    Dispatch : Redux State를 '변경' 시키는 방법
    사용법 : dispatch(actionFunction(...param));
*/

function Left3(props: any) {
  console.log("Rendering : Left3");

  const dispatch: AppDispatch = useAppDispatch();

  const upEvent = () => {
    dispatch(countUp());
    console.log("Event : Left3에서 +버튼 클릭");
  };

  const downEvent = () => {
    dispatch(countDown());
    console.log("Event : Left2에서 -버튼 클릭");
  };

  const setEvent = (num: number) => {
    dispatch(setTarget(num));
    console.log(`Event : Left3에서 Set ${num}버튼 클릭`);
  };

  return (
    <div>
      Left3 : &nbsp;
      <button onClick={upEvent}>+</button>
      <button onClick={downEvent}>-</button>
      <button onClick={() => setEvent(5)}>Set 5</button>
    </div>
  );
}

export default Left1;
