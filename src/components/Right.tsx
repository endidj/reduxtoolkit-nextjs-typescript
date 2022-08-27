import { RootState, useAppSelector } from "../store/store";

const Right1 = () => {
  console.log("Rendering : Right1");

  return (
    <div>
      Right1
      <Right2 />
    </div>
  );
};

const Right2 = () => {
  console.log("Rendering : Right2");

  return (
    <div>
      Right2
      <Right3 />
    </div>
  );
};

/* 
    Selector :  store의 전역상태 가져오는방법 (구독하는 방법)
*/
const Right3 = () => {
  console.log("Rendering : Right3");

  const counter = useAppSelector((state: RootState) => state.counter);
  // 이 방법도 됨 : const count = useAppSelector((state: RootState) => state.counter.value);

  return (
    <div>
      Right3 : {counter.value}
      <br />
    </div>
  );
};

export default Right1;
