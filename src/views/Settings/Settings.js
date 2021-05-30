import { setNestedObjectValues } from 'formik';
import styles from './Settings.module.css';
function Settings() {
    return (
      <div className={styles.box}>
        <h1>Settings</h1>
        <div></div>
        <h2>Theme</h2>
        <select id="color">
            <option value="color 1">color 1</option>
            <option value="color 2">color 2</option>
            <option value="color 3">color 3</option>
        </select>
        <h2>Font</h2>
        <label className={styles.label} for="font">Font</label>
        {/* <br></br> */}
        <select id="font">
            <option value="font 1">font 1</option>
            <option value="font 2">font 2</option>
            <option value="font 3">font 3</option>
        </select>
        {/* <br></br> */}
        <label className={styles.label} for="size">Theme</label>
        {/* <br></br> */}
        <select id="size">
            <option value="size 1">size 1</option>
            <option value="size 2">size 2</option>
            <option value="size 3">size 3</option>
        </select>
        <button className={styles.save}>Save</button>
      </div>)  }
  
  export default Settings;