import { AcademicCapIcon, CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react';
import CalendarTab from './calendarTab/CalendarTab'
import ParentsTab from './parentsTab/ParentsTab'
import AdminTab from './adminTab/AdminTab'
import StudentsTab from './studentTab/StudentTab'
import TeachersTab from './teachersTab/TeachersTab'
import { admins, people, students } from '../constants/people';


const navigation = [
    { name: 'Admins', href: '#', icon: HomeIcon, count: `${admins.length}`, current: true, component: <AdminTab />, disabled: false },
    { name: 'Parents', href: '#', icon: UserGroupIcon, count: `${people.length}`, current: false, component: <ParentsTab />, disabled: false },
    { name: 'Students', href: '#', icon: AcademicCapIcon, count: `${students.length}`, current: false, component: <StudentsTab />, disabled: false },
    { name: 'Teachers', href: '#', icon: UsersIcon, current: false, count: `${admins.length}`, component: <TeachersTab />, disabled: false },
    { name: 'Classes', href: '#', icon: FolderIcon, current: false, disabled: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false, component: <CalendarTab />, disabled: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false, disabled: true },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false, disabled: true },
]
const teams = [
    { id: 1, name: 'Settings', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Subscriptions', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Contact MSA Team', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardSectionV2({ selectedTab, setSelectedTab }) {

    useEffect(() => {
        setSelectedTab(navigation[0])
    }, [])
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 h-full">
            <nav className="flex flex-1 flex-col mt-1">
                <ul className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li
                                    key={item.name}
                                    onClick={() => setSelectedTab(item)}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.name === selectedTab.name
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.name === selectedTab.name ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                        {item.count ? (
                                            <span
                                                className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                                                aria-hidden="true"
                                            >
                                                {item.count}
                                            </span>
                                        ) : null}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                        <ul className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                                <li key={team.name}>
                                    <a
                                        href={team.href}
                                        className={classNames(
                                            team.current
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <span
                                            className={classNames(
                                                team.current
                                                    ? 'text-indigo-600 border-indigo-600'
                                                    : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                            )}
                                        >
                                            {team.initial}
                                        </span>
                                        <span className="truncate">{team.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
