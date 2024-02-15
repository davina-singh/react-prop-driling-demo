export default function ResetButton({ functiontoChangeCount }) {
  return (
    <>
      <button onClick={() => functiontoChangeCount(0)}>Reset Counter</button>
    </>
  );
}
