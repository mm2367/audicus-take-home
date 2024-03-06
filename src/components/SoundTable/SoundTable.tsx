'use client'
import H5AudioPlayer from "react-h5-audio-player";
import React, {useState} from "react";
import 'react-h5-audio-player/lib/styles.css';
import styles from './soundtable.module.scss';
import {ResponseModal} from "@/components/ResponseModal/ResponseModal";
import Link from "next/link";

export interface SoundTableProps{
    soundFiles:string[];
    patientId:string;
}

export type PatientResponse='Patient Responded'| 'Patient Did Not Respond' | ''
export default function SoundTable(props:SoundTableProps){
    const {soundFiles,patientId}=props;

    const [modalIsOpen,setModalIsOpen]=useState<boolean>();
    const [patientResponse,setPatientResponse]=useState<PatientResponse>('')
    const shouldPrettyPrintSoundFilename=(fileName:string)=> {
        const soundSubstringRegex = new RegExp('Patient_' + patientId + '_(.*).mp3')
        const search = fileName.match(soundSubstringRegex)
        return search !== null ? search[1].replace('_', ' ') : ''
    }


    const shouldGetSoundId = (fileName: string) => {
        const soundIDRegex = new RegExp('Patient_' + patientId + '_Sound_([0-9]{2}).mp3');
        const search = fileName.match(soundIDRegex);
        return search !== null ? search[1] : ''
    }
    const  handlePlay= async ()=>{
        //would get patient response for this sound if using API
        //getPatientResponse(patientId,soundId)

        setPatientResponse(Math.round(Math.random()) === 0 ? 'Patient Did Not Respond' : 'Patient Responded')
        setModalIsOpen(true);

    }


    return (
        <>
            <ul className={styles.listParent}>
                {soundFiles.map((file, index) => {
                    const soundId=shouldGetSoundId(file);
                    return (
                        <li key={index}>
                            <div className={'max-sm:text-sm my-3 flex justify-between'}>
                                <div>{shouldPrettyPrintSoundFilename(file)}</div>
                                <Link href={'/sounds/'+soundId}>
                                    View Patient Responses for Sound {soundId}
                                </Link>
                            </div>
                            <H5AudioPlayer
                                autoPlay={false}
                                src={`/stimuli/${file}`}
                                showJumpControls={false}
                                loop={false}
                                onPlay={()=> handlePlay()}
                            />
                        </li>
                    )
                })}
            </ul>
            <ResponseModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} patientId={patientId}>
                {patientResponse}
            </ResponseModal>
        </>
    )
}