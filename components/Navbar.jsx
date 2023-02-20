import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export default function Example() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="transition-all ease-in duration-200 focus:bg-gray-400 hover:bg-gray-100 p-4 rounded-md font-normal text-black"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-4 rounded-md transition-all ease-in duration-200 focus:bg-gray-400 hover:bg-gray-100 font-normal text-black"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-4 rounded-md transition-all ease-in duration-200 focus:bg-gray-400 hover:bg-gray-100 font-normal text-black"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-4 rounded-md transition-all ease-in duration-200 focus:bg-gray-400 hover:bg-gray-100 font-normal text-black"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto w-full py-2 px-4 rounded-none shadow-sm  lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span className="text-black font-bold text-2xl">My News</span>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button variant="gradient" className="hidden lg:inline-block">
                    <span>Fenil Sonani</span>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6 transition-all duration-300 ease-in-out"
                            viewBox="0 0 24 24"
                            stroke="black"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 transition-all duration-300 ease-in-out"
                            fill="none"
                            stroke="black"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <Button variant="gradient" size="sm" className="mb-2">
                        <span>Fenil Sonani</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}