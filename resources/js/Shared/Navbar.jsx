import { Link, usePage } from "@inertiajs/react";
import React from "react";


function Navbar() {
    const data = usePage().props;
    console.log(data);
    return (
        <>
            {" "}
            <div>
                <Link href="/">Welcome</Link>
                <Link href="/about-us">About</Link>
                <Link href="/contact-us">Contact</Link>
            </div>
            <div>
                <Link href='/login'>Login</Link>
            </div>
        </>
    );
}

export default Navbar;
