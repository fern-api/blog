import { useRef, useState } from 'react';
import { useAppContext } from './contexts/appContext';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const SubscribeForm = () => {
	const [status, setStatus] = useState<'ready' | 'success' | 'error'>('ready');
	const [requestInProgress, setRequestInProgress] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const { publication } = useAppContext();

	const subscribe = async () => {
		const email = inputRef.current?.value;
		if (!email) return;

		setRequestInProgress(true);

		/** LOOPS CODE */
		var formBody = 'userGroup=&email=' + encodeURIComponent(email);
		fetch('https://app.loops.so/api/newsletter-form/cldhxxa9c0004jq08kogof4x3', {
			method: 'POST',
			body: formBody,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((res) => [res.ok, res.json(), res])
			.then(([ok, dataPromise, res]) => {
				if (ok) {
					// If response successful
					// display success
					setStatus('success');
					setRequestInProgress(false);
				} else {
					// If response unsuccessful
					// display error message or response status\
					setStatus('error');
					setRequestInProgress(false);
				}
			})
			.catch((error) => {})
			.finally(() => {});
		/** END LOOPS CODE */
		/*
		try {
			const data = await request<
				SubscribeToNewsletterMutation,
				SubscribeToNewsletterMutationVariables
			>(GQL_ENDPOINT, SubscribeToNewsletterDocument, {
				input: { publicationId: publication.id, email },
			});
			setRequestInProgress(false);
			setStatus(data.subscribeToNewsletter.status);
		} catch (error) {
			const message = (error as any).response?.errors?.[0]?.message;
			if (message) {
				window.alert(message);
			}
			setRequestInProgress(false);
		}
		*/
	};
	return (
		<>
			{status === 'ready' && (
				<div className="relative w-full rounded-full bg-white p-2 dark:bg-neutral-950">
					<input
						ref={inputRef}
						type="email"
						placeholder="john@doe.com"
						className="left-3 top-3 w-full rounded-full p-3 text-base text-black outline-none focus:outline-green-400 dark:bg-neutral-950 dark:text-neutral-50 dark:focus:outline-black"
					/>
					<button
						disabled={requestInProgress}
						onClick={subscribe}
						style={{ background: 'rgb(22, 238, 157)' }}
						className=" dark:bg-primary-600 absolute right-3 top-3 rounded-full px-10 py-2 text-black disabled:cursor-not-allowed disabled:opacity-80"
					>
						Subscribe
					</button>
				</div>
			)}
			{status === 'success' && (
				<div className="relative w-full p-2 text-center">
					<p className="font-bold text-black">Subscribed</p>
				</div>
			)}

			{status === 'error' && (
				<div className="relative w-full p-2 text-center">
					<p className="dark:text-red text-red font-bold">Error</p>
				</div>
			)}
		</>
	);
};
