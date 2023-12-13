export function checkHttps(url: string): boolean {
	if (url.startsWith('https://')) {
		return true;
	}

	if (url.startsWith('http://') && process.env.NODE_ENV !== 'production') {
		return true;
	}

	// Allow http for .onion
	const tld = new URL(url).hostname.split('.').pop();
	switch (tld) {
		case 'onion': {
			return url.startsWith('http://')
		}
		default: {
			return false;
		}
	}
}
