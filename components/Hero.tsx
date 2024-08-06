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
	return (
		<div className="flex flex-col gap-y-24 md:gap-y-28 lg:gap-y-40 py-16 md:py-28">
			<div className="flex flex-col gap-y-6 md:gap-y-16 items-center justify-center text-primary font-black text-3xl md:text-7xl lg:text-[5.5rem]">
				<div className="flex items-center gap-x-2 md:gap-x-7">
					<h1>Lightening fast</h1>
					<div className="w-24 h-8 md:w-40 md:h-16 lg:w-60 lg:h-20 bg-primary rounded-full relative">
						<Image
							src={usdc}
							alt="alt"
							className="w-[3.8rem] md:w-[6rem] lg:w-fit absolute bottom-0 left-1/4"
						/>
						<Image
							src={sol}
							alt="alt"
							className="w-[3.9rem] md:w-[6rem] lg:w-fit absolute -right-4 -top-11 md:-top-16 lg:-top-24"
						/>
						<Image
							src={usdt}
							alt="alt"
							className="w-[3.9rem] md:w-[6rem] lg:w-fit absolute left-2 md:left-6 -top-16 md:-top-24 lg:-top-32"
						/>
					</div>
				</div>

				<div className="flex items-center relative">
					<Image
						src={dlr}
						alt="alt"
						className="w-[3.8rem] md:w-[6rem] lg:w-fit h-fit absolute -inset-x-14 -bottom-6 md:-inset-x-[20%] lg:-bottom-12"
					/>
					<h1>payments for</h1>
					<Image
						src={rupee}
						alt="alt"
						className="w-[3.8rem] md:w-[6rem] lg:w-fit h-fit absolute -right-16 md:-right-[25%] md:-inset-y-2  lg:-inset-y-5"
					/>
				</div>

				<div className="flex items-center gap-x-4 md:gap-7">
					<div className="w-24 h-8 md:w-40 md:h-16 lg:w-64 lg:h-20 bg-primary rounded-full relative">
						<Image
							src={btc}
							alt="alt"
							className="w-[3.4rem] md:w-[6rem] lg:w-fit absolute top-0 left-5 md:left-10"
						/>
						<Image
							src={eth}
							alt="alt"
							className="w-[4rem] md:w-[6rem] lg:w-fit absolute -right-4 top-5 md:top-10 lg:top-14"
						/>
						<Image
							src={pol}
							alt="alt"
							className="w-[4rem] md:w-[6rem] lg:w-fit absolute lg:left-6 top-10 md:top-16 lg:top-32"
						/>
					</div>
					<h1>everyone</h1>
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
