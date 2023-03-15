import { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Page404.module.scss";

const Page404: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <p onClick={() => navigate(-1)} className={styles.text}>
        Please, keep calm and return to the previous page
      </p>
    </div>
  );
};

export default Page404;
