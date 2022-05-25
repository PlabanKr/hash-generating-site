import { useState } from "react";
import { HashData } from "../../service/service";
import styles from "../../styles/components/Hash.module.css";

const Hash = () => {
  const [algorithm, setAlgorithm] = useState("");
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    console.log(algorithm);
    console.log(data);
    let hashResult = HashData(algorithm, data);
    console.log(hashResult);
    setHash(hashResult);
  };
  const handleSelect = (event) => {
    setAlgorithm(event.target.value);
  };
  const handleInput = (event) => {
    setData(event.target.value);
  };
  return (
    <div className={styles.hashBody}>
      <form className={styles.hashForm} onSubmit={handleForm}>
        <label htmlFor="algorithm">Select Algorithm</label>
        <select
          name="algorithm"
          id="algorithm"
          className={styles.algorithm}
          onChange={handleSelect}
        >
          <option value="">Select an algorithm</option>
          <option value="md5">MD 5</option>
          <option value="ripemd160">RIPEMD 160</option>
          <option value="sha1">SHA 1</option>
          <option value="sha224">SHA 224</option>
          <option value="sha256">SHA 256</option>
          <option value="sha512">SHA 512</option>
        </select>
        <input type="text" className={styles.input} onChange={handleInput} />
        <button className={styles.genBtn}>Generate</button>
      </form>
      <h4>Generated Hash</h4>
      <blockquote className={styles.blockquote}>{hash}</blockquote>
      <div className={styles.author}>
        <p>
          Made By <br />
          <a href="https://github.com/PlabanKr" target="_blank">
            <strong>Plaban Kumar Mondal</strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hash;
