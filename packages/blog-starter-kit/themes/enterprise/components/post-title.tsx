import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
	return (
		<div className="prose md:prose-xl text-white dark:prose-invert prose-h1:text-center mx-auto max-w-screen-lg px-5">
			<h1 className="text-white">{children}</h1>
		</div>
	);
};
