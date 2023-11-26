import { Head, Html, Main, NextScript } from 'next/document';
import StyledComponentsRegistry from '../lib/registry';

export default function Document({ children }: { children: React.ReactNode }) {
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
