import React from "react";

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
                                    <button
                                        onClick={() => setOpen(false)}
                                        type="button"
                                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-gray-100"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        type="button"
                                        onClick={() => setOpen(false)}
                                    >
                                        Save
                                    </button>
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