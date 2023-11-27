import { useEffect, useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	useEffect(() => {
		console.log('handler mounted!');
		const handler = (ev: MessageEvent<{ type: string; message: string }>) => {
			console.log('ev', ev);
			if ((ev as any)?.data?.goTo) {
				console.log('message recieved', (ev as any).data.goTo);
				console.log('changing location!');
				window.location.href = (ev as any).data.goTo;
				(window as any).top.location.href = (ev as any).data.goTo;
				console.log('location changed to: ', window.location.href);
				console.log('v1.0');
				return false;
			}
		};

		window.addEventListener('message', handler);
		return () => window.removeEventListener('message', handler);
		//src = https://thuannp.com/react-communication-with-iframe/
	}, []);

	return (
		<iframe src="https://buildwithfern.com/header" style={{ height: 82, width: '100%' }}></iframe>
	);
};
