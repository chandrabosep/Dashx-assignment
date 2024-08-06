import Hero from "@/components/Hero";
import Info from "@/components/Info";

export default function Home() {
	return (
		<main className="w-full min-h-screen flex flex-col gap-y-10 py-8">
			{/* Hero */}
			<Hero />
			<Info />
		</main>
	);
}
