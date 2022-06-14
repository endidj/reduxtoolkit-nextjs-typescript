import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../redux/store";

const Left3 = () => {
  /* 
    Selector :  store의 전역상태 가져오는방법 (구독하는 방법)
  */
  const counter = useAppSelector((state: RootState) => state.counter);
  // const count = useAppSelector((state: RootState) => state.counter.value); 이 방법도 됨.

  console.log("Left3 컴포넌트 렌더링 완료");

  return (
    <div style={{ fontSize: "30px", color: "green" }}>
      Left3 : {counter.value}
    </div>
  );
};

export default Left3;
