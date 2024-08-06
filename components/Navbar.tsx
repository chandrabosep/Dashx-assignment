"use client";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const links = ["home", "business", "about-us", "Documentation"];

export default function Navbar() {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="w-full flex items-center justify-between mt-7 ">
			<Image src={logo} alt="alt" className="size-fit" />

			<div className="hidden w-fit fixed inset-x-0 mx-auto bg-white lg:flex flex-row items-center gap-x-16 shadow-[#D1D1D1] shadow-md px-8 py-4.5 rounded-full z-50">
				{links.map((link) => (
					<Link
						href={link}
						key={link}
						className="capitalize text-lg font-medium text-[#1B1B1B]"
					>
						{link === "about-us" ? "About Us" : link}
					</Link>
				))}
			</div>
			<div className="hidden lg:flex">
				<Button>Download</Button>
			</div>
			<div className="lg:hidden">
				{!toggle ? (
					<Menu onClick={() => setToggle(!toggle)} />
				) : (
					<X onClick={() => setToggle(!toggle)} />
				)}
			</div>

			{toggle && (
				<div className="absolute top-20 left-0 h-screen w-full flex flex-col items-center gap-y-10 bg-white py-4 z-50">
					{links.map((link) => (
						<Link
							href={link}
							key={link}
							className="capitalize text-lg font-medium text-[#1B1B1B]"
							onClick={() => setToggle(false)}
						>
							{link === "about-us" ? "About Us" : link}
						</Link>
					))}
					<Button>Download</Button>
				</div>
			)}
		</div>
	);
}
