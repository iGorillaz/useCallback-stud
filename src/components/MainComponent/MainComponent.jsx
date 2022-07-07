import { useCallback, useEffect, useState } from "react";

const MainComponent = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [num] = useState(4);
  const [num1] = useState(5);

  const sum = useCallback(() => num + num1, [num, num1]);

  useEffect(() => {
    console.log(`Here! New sum! ${sum()} `);
	 setResult(sum())
  }, [sum]);

  return (
    <div>
      <input
        type="text"
        placeholder="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>Output: {input || "--"}</h1>
      <p>Result: {JSON.stringify(result)}</p>
    </div>
  );
};

export default MainComponent;
