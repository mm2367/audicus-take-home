import styles from "./page.module.scss";
import {ButtonLink} from "@/components/ButtonLink/ButtonLink";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landingPageSection}>
        <div>
            Welcome
        </div>
          <div className={styles.subtitle}>
              Milam x Audicus Take Home Asseesment
          </div>
      </div>
        <ButtonLink href={'patients'}/>
    </main>
  );
}
