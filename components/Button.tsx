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
			className={`${className} text-white bg-accent px-8 py-4 rounded-full  `}
		>
			{children}
		</button>
	);
}
