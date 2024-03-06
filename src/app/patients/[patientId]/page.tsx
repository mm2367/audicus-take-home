import React from "react";
import SoundTable from "@/components/SoundTable/SoundTable";
import styles from "@/components/SoundTable/soundtable.module.scss";
import {getSoundFiles, getSoundsForAPatient} from "@/helpers/utils";

type PageParams = {
    patientId: string;
};


export default function PatientSoundPage(props: { params: { patientId: string; }; }):React.JSX.Element {
    const {patientId}=props.params
    const soundFiles=getSoundsForAPatient(patientId)


    return (
        <div className={'max-sm:p-8 p-16'}>
            <h1 className={styles.title}>
                {`Patient ${patientId}'s Audio Files`}
            </h1>
                <SoundTable soundFiles={soundFiles} patientId={props.params.patientId}/>
        </div>
    )
}


export async function generateStaticParams(): Promise<PageParams[]> {
    const files=getSoundFiles();
    const patientRegex=/Patient_(.*)_Sound/;
    const patientIds=files.map((file)=>{
        const search=patientRegex.exec(file)
        if(search!==null){

            return search[1]
        }
    })

   const uniquePatientIds:string[]= [...new Set(patientIds)]
    const paths =uniquePatientIds.map((path)=>({
        patientId:path
        }))

    return paths

}

export async function generateMetadata({params} ) {
    return {
        title: `Sound Page for ${params.patientId}`,
        description: `Page to view sounds for ${params.patientId}`,
    }
}