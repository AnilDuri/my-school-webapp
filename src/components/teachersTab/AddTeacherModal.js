import { Button } from '../Button'
import Modal from '../Modal/Modal'

export default function AddTeacherModal({ open, setOpen }) {
    return (
        <Modal
            open={open}
            setOpen={setOpen}
            header={'Add Teacher'}
            body={<TeacherModalForm setOpen={setOpen} />}
        />
    )
}

const TeacherModalForm = ({ setOpen }) => {
    return (
        <form className='flex flex-col gap-2'>
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Key Stage
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="key-stage"
                            id="key-stage"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="classes" className="block text-sm font-medium leading-6 text-gray-900">
                        Classes
                    </label>
                    <div className="mt-2">
                        <select
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option>English</option>
                            <option>Math</option>
                            <option>Science</option>
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
                            autoComplete="email"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone Number
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


                <div className="sm:col-span-2">
                    <label htmlFor="secondary-phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                        Secondary Phone Number
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="secondary-phone-number"
                            id="secondary-phone-number"
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
                    onClick={() => setOpen(false)}
                >
                    Save
                </Button>
            </div>
        </form>
    )
}