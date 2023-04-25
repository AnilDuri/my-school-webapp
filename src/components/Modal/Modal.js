import React from "react";
import { Button } from "../Button";

export default function Modal({ open, setOpen, header, body, onSave }) {
    return (
        <>
            {open && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen"
                    >
                        <div className="relative w-full h-11/12 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full max-h-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-start p-5 border-b border-solid border-slate-200 rounded-t">
                                    {header && header}
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto overflow-auto">
                                    {body && body}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-2">
                                    <Button
                                        onClick={() => setOpen(false)}
                                        type="button"
                                        variant="secondary"
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant="primary"
                                        type="button"
                                        onClick={() => setOpen(false)}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
}