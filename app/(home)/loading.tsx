// backend 에서는 로딩중이지만 전과는 다르게 이 화면을 볼 수 있다
// 이후 backend 작업이 완료되면 해당 컴포넌트로 화면을 교체해준다
// 브라우저는 로딩을 기다리면서 화면에는 일부 화면만 그려준다
// backend가 content를 streaming 하기에 가능하다
export default function Loading() {
  return <h2>Loading...</h2>;
}
