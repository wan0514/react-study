import { useCallback, useEffect, useState } from 'react';
import Child from './child';

//함수 생성을 기록하기 위한 Set 객체 생성
const set = new Set();

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  }, []);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  // ✨ useCallback을 사용해서 메모리에 저장해서 재사용하기
  const printLog = useCallback(() => console.log('re-execute'), []);

  //printLog함수를 set에 추가!  //✨ usecallback을 사용하자 set에 더이상 함수가 추가되지 않는다 .
  set.add(printLog);
  console.log(set);

  return (
    <div className="App">
      <Child
        handleIncrease={increase}
        handleDecrease={decrease}
        count={count}
      />

      <button onClick={printLog}>Print</button>
    </div>
  );
}
