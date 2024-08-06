"use client";
import React from "react";
import Image from "next/image";
import mock from "@/public/hero-assets/mock.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Info() {
	const txt1 = useRef(null);
	const txt2 = useRef(null);
	const rmock = useRef(null);
	const rcontainer = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({});

		tl.from(txt1.current, {
			ScrollTrigger: {
				markers: true,
				trigger: rcontainer.current,
				start: "bottom center",
				end: "bottom bottom",
			},
			x: -50,
			opacity: 0,
			duration: 0.3,
			ease: "power1.in",
		})
			.from(txt2.current, {
				x: -50,
				opacity: 0,
				duration: 0.3,
				ease: "power1.in",
			})
			.from(rmock.current, {
				x: 50,
				opacity: 0,
				duration: 0.3,
				ease: "power1.in",
			});
	});
	return (
		<div
			ref={rcontainer}
			className="rcontainer grid grid-cols-1 md:grid-cols-2 gap-10"
		>
			<div className="flex flex-col gap-y-10 md:gap-y-20 lg:gap-y-28">
				<h4
					ref={txt1}
					className="text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight"
				>
					Lorem ipsum odor amet, consectetuer adipiscing elit.
				</h4>
				<div ref={txt2} className="flex flex-col gap-y-2">
					<h6 className="text-lg md:text-2xl font-semibold">
						Introducing DashX
					</h6>
					<p className="text-lg md:text-2xl text-balance text-secondary max-w-[30rem]">
						A unified payments gateway solution, bridging fiat and
						web3, enabling users to have near instant crypto
						transactions.
					</p>
				</div>
			</div>
			<div className="mx-auto md:ml-auto">
				<Image ref={rmock} src={mock} alt="alt" className="size-fit" />
			</div>
		</div>
	);
}
