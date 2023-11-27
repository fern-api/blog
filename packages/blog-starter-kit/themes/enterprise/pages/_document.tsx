import { Head, Html, Main, NextScript } from 'next/document';
import { useEffect } from 'react';
import initPostHog from '../lib/initPostHog';
import StyledComponentsRegistry from '../lib/registry';

export default function Document({ children }: { children: React.ReactNode }) {
	useEffect(initPostHog, []);

	return (
		<Html lang="en">
			<Head></Head>
			<body style={{ background: 'black' }}>
				<StyledComponentsRegistry>
					<Main />
				</StyledComponentsRegistry>

				<NextScript />
			</body>
		</Html>
	);
}
