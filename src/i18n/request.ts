import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Locales supportées (régionales)
  const supported = new Set([
    "fr-fr",
    "nl-nl",
    "en-gb",
    "en-us",
    "en-ca",
    "en-au",
    "de-de",
    "es-es",
    "pt-br",
    "it-it",
    "ru-ru",
    "zh-cn",
    "ar-ae",
  ]);
  const requested = (locale as string | undefined) ?? "fr-fr";
  const normalized = supported.has(requested) ? requested : "fr-fr";
  // Chargement robuste avec repli sur fr-fr si le fichier de la locale est manquant
  const messages = (
    await import(`../../i18n/messages/${normalized}.json`).catch(async () => {
      return await import(`../../i18n/messages/fr-fr.json`);
    })
  ).default;

  return {
    locale: normalized,
    messages,
  };
});
