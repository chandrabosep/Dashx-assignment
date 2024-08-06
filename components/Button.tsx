import React from "react";

export default function Button({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<button
			className={`${className} text-white bg-accent py-3 px-8 md:py-4 rounded-full  `}
		>
			{children}
		</button>
	);
}
