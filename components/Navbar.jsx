import { useState, useEffect, Fragment } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Input,
    DialogFooter,
    DialogBody,
    DialogHeader,
    Dialog,
} from "@material-tailwind/react";
import Link from "next/link";

export default function Example() {
    const [openNav, setOpenNav] = useState(false);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const handleOpen = () => setOpen(!open);


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
                <Link href="/tesla" className="flex items-center">
                    Tesla
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-4 rounded-md transition-all ease-in duration-200 focus:bg-gray-400 hover:bg-gray-100 font-normal text-black"
            >
                <Link href="machine-learning" className="flex items-center">
                    Machine Learning
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-4 rounded-md transition-all ease-in duration-200 focus:bg-gray-400 hover:bg-gray-100 font-normal text-black"
            >
                <Link href="/india" className="flex items-center">
                    India
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-4 rounded-md transition-all ease-in duration-200 focus:bg-gray-400 hover:bg-gray-100 font-normal text-black"
            >
                <Link href="/usa" className="flex items-center">
                    USA
                </Link>
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
                    className="mr-4 cursor-pointer py-1.5 font-normal flex gap-3"
                >
                    <img src="/logo.png" alt="logo" className="h-8 w-8" />
                    <span className="text-black font-bold text-2xl">FSG News</span>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                {/* <Link href="https://newsapi.org/" target={"_blank"}> */}
                <Button variant="gradient" onClick={handleOpen} className="hidden lg:inline-block">
                    <span>Search</span>
                </Button>
                {/* </Link> */}
                {/* code that will redirect to search query result with form tag */}
                {/* <form action={`/search/${search}`} method="get"> */}
                <Fragment>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Enter A Title</DialogHeader>
                        <DialogBody divider>
                            <Input variant="standard" label="Search" onChange={(e) => setSearch(e.target.value)} value={search} />
                        </DialogBody>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Link href={`/search/${search}`}>
                                <Button variant="gradient" type="submit" color="green" onClick={handleOpen}>
                                    <span>Confirm</span>
                                </Button>
                            </Link>
                        </DialogFooter>
                    </Dialog>
                </Fragment>
                {/* </form> */}
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
                    {/* <Link href="https://newsapi.org/" target={"_blank"}> */}
                    <Button variant="gradient" onClick={handleOpen} size="sm" className="mb-2">
                        <span>Search</span>
                    </Button>
                    {/* </Link> */}
                </div>
            </MobileNav>
        </Navbar>
    );
}