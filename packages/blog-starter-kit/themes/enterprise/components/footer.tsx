import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<>
			<iframe
				src="https://formal-trust-650879.framer.app/footer"
				style={{ height: 368, width: '100%' }}
			></iframe>
		</>
	);
};
