"use client";
import { navLinks, TNavLink } from '@/libs/navlinks';
import React, { useState } from 'react';
import { RiMenu2Line, RiCloseLine, RiBracesFill } from 'react-icons/ri';

const Navbar = () => {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleLinkClick = (id: number) => {
        setActiveId(id);
        setOpenMenu(false); 
    };

    const closeMenu = () => {
        setOpenMenu(false);
    };

    return (
        <div className="flex justify-center items-center relative">
            <div className="text-header bg-[#101010] py-3 md:px-0 px-3 flex justify-between items-center fixed top-0 md:w-[81%] w-[95%] z-50">
                <h2 className="text-subheading font-bold flex items-center gap-4 bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"><span >{`{ }`}</span> <span>Joy Debnath</span></h2>

                {/* Desktop Menu */}
                <ul className="md:flex hidden items-center gap-10">
                    {navLinks.map((link: TNavLink) => (
                        <li
                            className={`text-paragraph capitalize transition-all duration-500 ${activeId === link.id ? "text-blue-500" : ""
                                }`}
                            key={link.id}
                        >
                            <a onClick={() => setActiveId(link.id)} href={link.route}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpenMenu(true)}
                    className={`md:hidden ${openMenu ? "hidden" : "block"}`}
                >
                    <RiMenu2Line size={24} />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {openMenu && (
                <>
                    {/* Backdrop */}
                    <div
                        onClick={closeMenu}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    />

                    {/* Drawer */}
                    <div className="fixed top-0 right-0 h-full w-72 bg-card-background shadow-2xl z-50 transform transition-transform duration-300 md:hidden">
                        <div className="flex justify-between items-center p-5 border-b border-common-border text-header">
                            <h2 className="text-subheading font-bold">Menu</h2>
                            <button onClick={closeMenu}>
                                <RiCloseLine size={28} />
                            </button>
                        </div>

                        <ul className="flex flex-col mt-8 px-6 gap-6 text-header">
                            {navLinks.map((link: TNavLink) => (
                                <li
                                    className={`text-paragraph capitalize text-lg transition-all duration-300 ${activeId === link.id ? "text-button-background font-semibold" : ""
                                        }`}
                                    key={link.id}
                                >
                                    <a
                                        onClick={() => handleLinkClick(link.id)}
                                        href={link.route}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;