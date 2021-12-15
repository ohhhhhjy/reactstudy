import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange };
}
function useFetch(url) {
  const [payLoad, setPayLoad] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const callUrl = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setPayLoad(data);
      throw error;
    } catch {
      setError("errrrrrrrror");
    } finally {
      setLoading(false);
      console.log(payLoad, loading, error);
    }
  };
  useEffect(() => {
    callUrl();
  }, []);
  return { payLoad, loading, error };
}
function App() {
  const name = useInput("");
  const { payLoad, loading, error } = useFetch("https://aws.random.cat/meow");
  console.log("second", payLoad, loading, error);
  return (
    <div className="App">
      <h1>Use Hooks</h1>
      <br />
      {loading && <span>loading your cat</span>}
      {!error && <span>{error}</span>}
      {!loading && payLoad && <img src={payLoad.file} />}
      <input {...name} placeholder="Whats your name?" />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);