"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import usdc from "@/public/hero-assets/usdc.svg";
import sol from "@/public/hero-assets/sol.svg";
import usdt from "@/public/hero-assets/usdt.svg";
import dlr from "@/public/hero-assets/dlr.svg";
import rupee from "@/public/hero-assets/rupee.svg";
import btc from "@/public/hero-assets/btc.svg";
import eth from "@/public/hero-assets/eth.svg";
import pol from "@/public/hero-assets/pol.svg";
import Button from "@/components/Button";

export default function Hero() {
	const ht1 = useRef(null);
	const ht2 = useRef(null);
	const ht3 = useRef(null);
	const rusdc = useRef(null);
	const rsol = useRef(null);
	const rusdt = useRef(null);
	const rdlr = useRef(null);
	const rrupee = useRef(null);
	const rbtc = useRef(null);
	const reth = useRef(null);
	const rpol = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({});

		tl.from(ht1.current, {
			x: 50,
			opacity: 0,
			duration: 0.3,
			ease: "power1.in",
		}).from(ht2.current, {
			opacity: 0,
			duration: 0.3,
			ease: "power1.in",
		});
		gsap.from(ht3.current, {
			x: -50,
			opacity: 0,
			duration: 0.3,
			ease: "power1.in",
		});

		gsap.from(rusdc.current, {
			y: 5,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		});
		gsap.from(rsol.current, {
			y: 10,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		});
		gsap.from(rusdt.current, {
			y: 20,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		});

		gsap.from(rdlr.current, {
			x: -20,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		});
		gsap.from(rrupee.current, {
			x: 20,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		});

		gsap.from(rbtc.current, {
			y: -5,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		});
		gsap.from(reth.current, {
			y: -10,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		});
		gsap.from(rpol.current, {
			y: -20,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		});
	});
	return (
		<div className="flex flex-col gap-y-24 md:gap-y-28 lg:gap-y-40 py-16 md:py-28">
			<div className="flex flex-col gap-y-6 md:gap-y-16 items-center justify-center text-primary font-black text-3xl md:text-7xl lg:text-[5.5rem]">
				<div className="flex items-center gap-x-2 md:gap-x-7">
					<h1 ref={ht1}>Lightening fast</h1>
					<div className="w-24 h-8 md:w-40 md:h-16 lg:w-60 lg:h-20 bg-primary rounded-full relative">
						<Image
							ref={rusdc}
							src={usdc}
							alt="alt"
							className="w-[3.8rem] md:w-[6rem] lg:w-fit absolute bottom-0 left-1/4"
						/>
						<Image
							ref={rsol}
							src={sol}
							alt="alt"
							className="w-[3.9rem] md:w-[6rem] lg:w-fit absolute -right-4 -top-11 md:-top-16 lg:-top-24"
						/>
						<Image
							ref={rusdt}
							src={usdt}
							alt="alt"
							className="w-[3.9rem] md:w-[6rem] lg:w-fit absolute left-2 md:left-6 -top-16 md:-top-24 lg:-top-32"
						/>
					</div>
				</div>

				<div className="flex items-center relative">
					<Image
						ref={rdlr}
						src={dlr}
						alt="alt"
						className="w-[3.8rem] md:w-[6rem] lg:w-fit h-fit absolute -inset-x-14 -bottom-6 md:-inset-x-[20%] lg:-bottom-12"
					/>
					<h1 ref={ht2}>payments for</h1>
					<Image
						ref={rrupee}
						src={rupee}
						alt="alt"
						className="w-[3.8rem] md:w-[6rem] lg:w-fit h-fit absolute -right-16 md:-right-[25%] md:-inset-y-2  lg:-inset-y-5"
					/>
				</div>

				<div className="flex items-center gap-x-4 md:gap-7">
					<div className="w-24 h-8 md:w-40 md:h-16 lg:w-64 lg:h-20 bg-primary rounded-full relative">
						<Image
							ref={rbtc}
							src={btc}
							alt="alt"
							className="w-[3.4rem] md:w-[6rem] lg:w-fit absolute top-0 left-5 md:left-10"
						/>
						<Image
							ref={reth}
							src={eth}
							alt="alt"
							className="w-[4rem] md:w-[6rem] lg:w-fit absolute -right-4 top-5 md:top-10 lg:top-14"
						/>
						<Image
							ref={rpol}
							src={pol}
							alt="alt"
							className="w-[4rem] md:w-[6rem] lg:w-fit absolute lg:left-6 top-10 md:top-16 lg:top-32"
						/>
					</div>
					<h1 ref={ht3}>everyone</h1>
				</div>
			</div>
			<div className="flex flex-col items-center md:items-start gap-y-3">
				<p className="text-secondary font-medium text-base text-balance md:text-xl text-center md:text-left md:w-80">
					Unifying fiat and web3, making crypto accessible to
					everyone.
				</p>
				<Button className="py-6 px-20 w-fit">Download</Button>
			</div>
		</div>
	);
}
