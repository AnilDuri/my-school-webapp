import { useState } from 'react';
import { Button } from '../Button'
import { TabContainer, TabContent, TabHeader, TabTitle } from '../layouts/layouts';
import { admins } from '../../constants/people';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AdminTab() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <TabContainer>
                <TabHeader
                    left={
                        <TabTitle title={'Admins'} subtitle={'A list of all the Admins in your account including their name, phone number and email.'} />}
                    right={
                        <div className="flex gap-2">
                            <Button
                                variant={'secondary'}
                                onClick={() => console.log('Clicked')}
                                type="button">
                                Import
                            </Button>
                            <Button
                                variant={'primary'}
                                type="button"
                                onClick={() => setOpen(true)}
                            >
                                Add Admin
                            </Button>
                        </div>
                    } />
                <TabContent>
                    <table className="min-w-full border-separate border-spacing-0">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                >
                                    Title
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                                >
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((person, personIdx) => (
                                <tr key={person.email}>
                                    <td
                                        className={classNames(
                                            personIdx !== admins.length - 1 ? 'border-b border-gray-200' : '',
                                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                                        )}
                                    >
                                        {person.name}
                                    </td>
                                    <td
                                        className={classNames(
                                            personIdx !== admins.length - 1 ? 'border-b border-gray-200' : '',
                                            'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                                        )}
                                    >
                                        {person.title}
                                    </td>
                                    <td
                                        className={classNames(
                                            personIdx !== admins.length - 1 ? 'border-b border-gray-200' : '',
                                            'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                                        )}
                                    >
                                        {person.email}
                                    </td>

                                    <td
                                        className={classNames(
                                            personIdx !== admins.length - 1 ? 'border-b border-gray-200' : '',
                                            'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                                        )}
                                    >
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit<span className="sr-only">, {person.name}</span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TabContent>
            </TabContainer >
            {/* Add Admin Modal here */}
            {/* <AddParentModal open={open} setOpen={setOpen} /> */}
        </>
    )
}
