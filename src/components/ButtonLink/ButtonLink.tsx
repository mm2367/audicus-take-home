import Link from "next/link";
import styles from './buttonlink.module.scss'
export interface ButtonLinkProps{
    href:string;
}
export const ButtonLink=(props:ButtonLinkProps)=>{
    const {href}=props;
    return (
        <Link className={styles.landingPageLink} href={href}>
            View Patients
        </Link>
    )
}