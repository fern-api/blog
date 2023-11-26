import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div
				className="min-h-screen dark:bg-neutral-950"
				style={{ backgroundImage: 'url(/assets/svgs/grid.svg)', background: 'contain no-repeat' }}
			>
				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
