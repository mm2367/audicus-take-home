import path from "path";
import fs from "fs";
/**
 * Used to read the sound files in the public folder and return then in an array
 */
export const getSoundFiles = () => {
    const filePath: string = path.join(process.cwd(), 'public', 'stimuli')
    const files: string[] = fs.readdirSync(filePath)
    return files
}

/**
 * Used to parse the sound files in the public folder and return the sound ID.
 * Assuming the sound is the same for each patient corresponding to the ID I decided to only use Patient_A
 */
export const getSoundIds = () => {
    const files = getSoundFiles();
    //Assuming all have the same test and # of sounds we can just traverse through one of the patient's sounds
    const soundIdRegex = new RegExp('Patient_A_Sound_([0-9]{2}).mp3')
    const soundIds = files.map((file) => {
        const search = file.match(soundIdRegex)

        if (search !== null) {

            return search[1]
        }

    })

    return soundIds;
}
/**
 * Used to parse the sound files in the public folder return all of the patient IDs
 */
export const getPatientIds = () => {
    const files = getSoundFiles();
    const patientRegex = /Patient_(.*)_Sound/;
    const patientIds = files.map((file) => {
        const search = file.match(patientRegex)
        if (search !== null) {

            return search[1]
        }
    })

    return [...new Set(patientIds)]
}
/**
 * Used to parse the sound files in the public folder return all the sound files corresponding to a Patient
 * @param {string} patientID The patientID used to search the sound files
 */
export const getSoundsForAPatient = (patientID: string) => {
    const files = getSoundFiles();
    const soundFiles = files.filter((file) => {
        return file.startsWith(`Patient_${patientID}_`)
    })

    return soundFiles
}