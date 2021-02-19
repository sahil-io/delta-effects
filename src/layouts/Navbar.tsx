import React, {memo, useState} from "react";
import Logo from '@/components/Logo';

import HamburgerMenu from 'react-hamburger-menu'
import Link from "next/link";
import cn from "classnames"
import styles from "@/styles/layouts/Navbar.module.scss"

const MobileMenu = ({isOpen, onClick, children}) => {
    return (
        <div>
            <div className="cursor-pointer">
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={onClick}
                    width={20}
                    height={24}
                    strokeWidth={2}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
            {isOpen && <div className="absolute shadow-xl top-0 left-0 right-0" style={{top: `52px`}}>
				<div className="bg-white p-4">
                    {children}
				</div>
			</div>}
        </div>
    )
}

const NavItem = ({navItem}) => {
    return (
        <>
            {navItem.path && <Link href={navItem.path}>
				<a className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                    {navItem.title}
				</a>
			</Link>

            }
            {!navItem.path && <div
				className={cn("cursor-pointer text-gray-900 inline-flex items-center border-transparent px-1 pt-1 border-b-2 text-sm font-medium", navItem.children && styles.dropdown_parent)}>
                {navItem.title}
                {navItem.children && <div className={styles.dropdown}>
					<ul>
                        {navItem.children.map((item, idx) => {
                            return (<li key={idx}>
                                <Link href={item.path}>{item.title}</Link>
                            </li>)
                        })}
					</ul>
				</div>}
			</div>}
        </>
    )
}

const Navbar = () => {
    const [hamOpen, setHamOpen] = useState(false)

    const navigation = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Company",
            children: [
                {
                    title: "Our Story",
                    path: "/our-story"
                },
                {
                    title: "Meet The Team",
                    path: "/meet-the-team"
                },
                {
                    title: "Our Vision",
                    path: "/our-vision"
                },
            ]
        },
        {
            title: "Accounting & Tax Services",
            children: [
                {
                    title: "Payroll",
                    path: "/payroll-processing"
                },
                {
                    title: "Bookkeeping",
                    path: "/bookkeeping"
                },
                {
                    title: "Tax Preparation",
                    path: "/tax-preparation"
                },
                {
                    title: "Start-Up Solutions",
                    path: "/start-up-solutions"
                }
            ]
        },
        {
            title: "Resources",
            path: "/resources"
        }
    ]

    const menuClicked = (ev) => {
        setHamOpen(!hamOpen)
    }

    return (
        <div className="">
            <nav className="bg-white shadow">
                <div className="container">
                    <div className="flex justify-between h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href={"/"}>
                                <Logo/>
                            </Link>
                        </div>

                        <div className="hidden sm:flex sm:space-x-8 w-full justify-end sm:mr-8">
                            {navigation.map((item, idx) => <NavItem key={idx} navItem={item}/>)}

                        </div>

                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <Link href={"/contact"}>
                                <a className="button button-primary">
                                    Book An Appointment
                                </a>
                            </Link>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <a href="#"
                           className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Dashboard</a>
                        <a href="#"
                           className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Team</a>
                        <a href="#"
                           className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</a>
                        <a href="#"
                           className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Calendar</a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">Tom Cook</div>
                                <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                            </div>
                            <button
                                className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">View notifications</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="mt-3 space-y-1">
                            <a href="#"
                               className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Your
                                Profile</a>
                            <a href="#"
                               className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</a>
                            <a href="#"
                               className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign
                                out</a>
                        </div>
                    </div>
                </div>

            </nav>
        </div>

    );
}


export default memo(Navbar)
