import Link from "next/link";
import styles from './patienttable.module.scss'
export interface PatientTableProps {
    patientIds: string[];
    patientSoundResponses?:{};
}

export default function PatientTable(props: PatientTableProps) {
    const {patientIds,patientSoundResponses} = props;
    const renderPatientTableChildren=(patientId:string,index:number)=>{
        if(patientSoundResponses){
           return(
               <>
                   <Link href={`/patients/${patientId}`}>
                   <li className={'max-sm:text-sm flex justify-between'} key={patientId}>
                      <div>Patient {patientId}</div>
                       <div>
                           {patientSoundResponses[patientId]}
                       </div>
                   </li>
                   </Link>

               </>
           )
        }
        return(
            <>
                <Link href={`patients/${patientId}`}>
                    <li key={patientId}>
                        Patient {patientId}
                    </li>
                </Link>
            </>
        )

    }

    return (
        <div className={styles.patientTable}>
            <ul>
                {patientIds.map((patientId,index) => {
                    return (
                        renderPatientTableChildren(patientId,index)
                    )
                })}
            </ul>
        </div>
    )
}