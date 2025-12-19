import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
	// Locales supportées (régionales)
	const supported = new Set([
		'fr-fr',
		'en-gb',
		'en-us',
		'en-ca',
		'en-au',
		'de-de',
		'es-es',
		'pt-br',
		'it-it',
		'ru-ru',
		'zh-cn',
		'ar-ae'
	]);
	const normalized = supported.has(locale) ? locale : 'fr-fr';
	const messages = (await import(`../../i18n/messages/${normalized}.json`)).default;

	return {
		locale: normalized,
		messages
	};
});


