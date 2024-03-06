import React from "react";
import {getPatientIds, getSoundIds} from "@/helpers/utils";
import styles from "@/components/SoundTable/soundtable.module.scss";
import PatientTable from "@/components/PatientTable/PatientTable";
import {ButtonLink} from "@/components/ButtonLink/ButtonLink";

type SoundParams = {
    soundId: string;
};

export default function SoundStatsPage(props): React.JSX.Element {
    const {soundId} = props.params
    const patientIds = getPatientIds();
    let allPatientResponses = {};

    patientIds.forEach((patientId) => {
        let patientResponse = Math.round(Math.random()) === 0 ? 'Patient Did Not Respond' : 'Patient Responded'
        allPatientResponses[patientId] = patientResponse;
    })

    //if working with ApI would make this APi call using Promise all and save the data in a data structure
    // const data=await getAllPatientResultsForSound(patientIds,soundId);

    const getResponseRate = () => {
        const patientResponseCount = Object.values(allPatientResponses).filter((response) => {
            return response === 'Patient Responded'
        }).length
        return String(patientResponseCount / patientIds.length * 100) + '%'
    }

    return (
        <div className={'p-16'}>
            <ButtonLink href={'/patients'}/>

            <h1 className={styles.title}>
                {`Patient Stats for Sound ` + soundId}
                <br/>
                {' Response Rate: ' + getResponseRate()}
            </h1>

            <PatientTable patientIds={patientIds} patientSoundResponses={allPatientResponses}/>
        </div>
    )
}

export async function generateStaticParams(): Promise<SoundParams[]> {
    //I am assuming the all the sounds are the same for each patient so Sound 01 is the same for Patient A, B, etc
    const soundIds = getSoundIds()
    const paths = soundIds.map((path) => ({
        soundId: path
    }))

    return paths

}
export async function generateMetadata({params} ) {
    return {
        title: `Patient Responses for ${params.soundId}`,
        description: `Page to view sound responses for Sound ${params.soundId}`,
    }
}
