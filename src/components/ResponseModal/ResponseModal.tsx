'use client'
import styles from './responsemodal.module.scss'
export interface ResponseModalProps {
    patientId: string;
    modalIsOpen: boolean;
    children:string;
    setModalIsOpen(openModal: boolean): void;
}

export const ResponseModal = (props: ResponseModalProps) => {
    const {modalIsOpen, setModalIsOpen} = props;


    if (modalIsOpen) {
        return (
            <>
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto p-16">
                        <div className="flex flex-col items-center text-black">
                            <h1>Patient Response:</h1>
                            Status Code: 200
                            <div>{props.children}</div>
                            <button type="button" className={styles.responseModalButton}
                                    onClick={() => setModalIsOpen(false)}>Close Modal
                            </button>
                        </div>
                    </div>
                </dialog>
            </>
        );
    }
}
