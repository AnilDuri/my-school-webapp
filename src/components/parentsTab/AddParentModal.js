import { useForm } from 'react-hook-form';

import { Button } from '../Button'
import Modal from '../Modal/Modal'

export default function AddParentModal({ open, setOpen }) {
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            header={'Add Parent'}
            body={<ParentModalForm setOpen={setOpen} />}
        />
    )
}

const ParentModalForm = ({ setOpen }) => {
    const { handleSubmit, register, errors, getValues } = useForm();

    const onSubmit = (data) => {
        console.log('DATA: ', data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ref={register({
                                required: "Please enter parent's first name",
                            })}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ref={register({
                                required: "Please enter parent's last name",
                            })}
                        />
                    </div>
                </div>


                <div className="sm:col-span-6">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Associated Student(s)
                    </label>
                    <div className="mt-2">
                        <select
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option>Adam</option>
                            <option>Anil</option>
                            <option>Duri</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ref={register({
                                required: "Please enter parent's last name",
                            })}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone Number
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ref={register({
                                required: "Please enter parent's phone number",
                            })}
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="secondary_phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                        Secondary Phone Number
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="secondary_phone_number"
                            id="secondary_phone_number"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end mt-4 gap-2">
                <Button
                    onClick={() => setOpen(false)}
                    type="button"
                    variant="secondary"
                >
                    Close
                </Button>
                <Button
                    variant="primary"
                    type="submit"
                    onClick={() => onSubmit()}
                >
                    Save
                </Button>
            </div>
        </form>
    )
}