/**
 * Used fetch a patient response for a specific sound
 * Should return a text Patient Responded or Patient Did Not Response
 * @param {string} patientId The PatientId used to search for the response
 * @param {string} soundId The SoundId used to search for the patient response
 */
export const getPatientResponse=async (patientId:string,soundId:string)=> {
    const query=await fetch(`https://jungle.audicus.com/v1/coding_test/patient_response/${patientId}/${soundId}`, {
        mode: 'no-cors',
        headers: {
            'content-type': 'text/html;charset=utf-8'
        }
    })
    const response=query.text();
    return response
}
/**
 * Used fetch all patient response for a specific sound
 * Should return an array or patient responses: Patient Responded or Patient Did Not Response
 * @param {string[]} patientIds The PatientIds used to search for all the responses
 * @param {string} soundId The SoundId used to search for all  the patient response
 */
export const getAllPatientResultsForSound = async (patientIds: string[], soundId: string) => {
    const fetch = await Promise.all(
        patientIds.map((patientId) =>
            fetch(`https://jungle.audicus.com/v1/coding_test/patient_response/${patientId}/${soundId}`).then(async (response) => {
                const patientResponse = await response.text()
                return patientResponse;
            })
        )
    ).then((res: string[]) => {
        return res;
    })
}
