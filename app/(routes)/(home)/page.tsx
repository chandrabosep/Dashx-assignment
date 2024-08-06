import Image from "next/image";
import mock from "@/public/hero-assets/mock.svg";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main className="w-full min-h-screen flex flex-col gap-y-10 py-8">
			{/* Hero */}
			<Hero />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div className="flex flex-col gap-y-10 md:gap-y-20 lg:gap-y-28">
					<h4 className="text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight">
						Lorem ipsum odor amet, consectetuer adipiscing elit.
					</h4>
					<div className="flex flex-col gap-y-2">
						<h6 className="text-lg md:text-2xl font-semibold">
							Introducing DashX
						</h6>
						<p className="text-lg md:text-2xl text-balance text-secondary max-w-[30rem]">
							A unified payments gateway solution, bridging fiat
							and web3, enabling users to have near instant crypto
							transactions.
						</p>
					</div>
				</div>
				<div className="mx-auto md:ml-auto">
					<Image src={mock} alt="alt" className="size-fit" />
				</div>
			</div>
		</main>
	);
}
