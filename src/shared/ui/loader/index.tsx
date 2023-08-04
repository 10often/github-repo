import styles from './loader.module.scss';

export const Loader = () => (
  <svg
    className={styles.loader}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="70px"
    height="70px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#81BAB4"
      strokeWidth="10"
      r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
    ></circle>
  </svg>
);
