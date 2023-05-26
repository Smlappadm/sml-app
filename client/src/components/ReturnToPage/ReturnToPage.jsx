import styles from "./ReturnToPage.module.css"
import { IoIosArrowBack } from "react-icons/io";

function ReturnToPage() {
    const regresar = () => {
      window.history.back();
    };
  
    return (
      
        <div className={styles.container}>
        <img
          className={styles.backgroundImage}
          src="https://cdn.discordapp.com/attachments/1009501562089000991/1110802981600895077/construccion3.png"
        />
          <img className={styles.containerSocial} src='https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png'/>
        <div className={styles.buttonContainer}>
          <IoIosArrowBack className={styles.backIcon} />
          <button onClick={regresar}>Regresar</button>
          
        </div>
      </div>
      
    );
  }
  
  export default ReturnToPage;