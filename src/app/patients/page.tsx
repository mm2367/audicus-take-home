import styles from "./patients.module.scss";
import PatientTable from "@/components/PatientTable/PatientTable";
import {getPatientIds} from "@/helpers/utils";
import Head from "next/head";


export default function Patients() {
    const patientIds = getPatientIds()
    return (
        <>
            <Head>
                <title>Patient&apos;s Page</title>
                <meta name="description" content="Meant to view patients"/>
            </Head>
            <div className={styles.main}>
                <h1>Select a Patient</h1>
                <PatientTable patientIds={patientIds}/>
            </div>
        </>
    )
}


export async function generateMetadata( ) {
    return {
        title: 'Patient\'s Page',
        description: 'Page to view Patients and navigate to their corresponding sounds',
    }
}





