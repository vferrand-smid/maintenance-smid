// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#333]">
      {/* Background split (image left / solid right) */}
      <div className="absolute inset-0">
        {/* Image (left part) */}
        <div className="absolute inset-y-0 left-0 w-[60%]">
          <Image
            src="/mockup_fr_screen_lounge-1.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 62vw, 100vw"
          />

          {/* Gradient that fades image into #333 on the right edge of the image */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-3xl bg-linear-to-r from-[#333]/2 via-[#333]/70 to-[#333]" />
        </div>

        {/* Solid right side */}
        {/* <div className="absolute inset-y-0 right-0 w-[30%] bg-[#333]" /> */}
      </div>
      {/* Content */}
      <div className="relative ml-auto flex min-h-screen max-w-6xl items-center px-6 py-10 w-[40%] bg-[#333]">
        <div className="grid w-full items-center gap-10 lg:gap-16">
          {/* Right: text */}
          <div className="text-white lg:pl-8 justify-start w-[55%]">
            <h1 className="text-4xl font-semibold leading-tight">
              Merci pour votre visite&nbsp;!
            </h1>

            <p className="mt-4 max-w-xl leading-relaxed text-white/85 text-base">
              Vous êtes extrêmement nombreux à affluer sur notre site web suite
              à notre passage dans l&apos;émission &quot;Qui veut être mon
              associé&quot;.
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-white/85 text-base">
              Notre site connaît un petit coup de fatigue, mais nos équipes sont
              déjà dessus.
            </p>

            <div className="mt-6 inline-flex max-w-xl rounded-lg bg-white/10 px-5 py-4 text-sm text-white/90 backdrop-blur">
              <div>
                <p>Le service revient très vite.</p>
                <p>Merci pour votre compréhension ☺️💚</p>
              </div>
            </div>

            <p className="mt-8 text-sm font-semibold text-white/90">
              Retrouvez-nous sur les réseaux
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://www.instagram.com/smartphone.id.france/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM24.8135 8.41699C22.889 8.30594 17.1158 8.30594 15.1914 8.41699C13.3781 8.38003 11.6241 9.05405 10.3066 10.2979C9.06324 11.6157 8.38194 13.3707 8.41895 15.1846C8.30795 17.11 8.30793 22.8847 8.41895 24.8096C8.38203 26.6233 9.056 28.3775 10.3066 29.6953C11.6241 30.9391 13.3781 31.6135 15.1914 31.584C17.1158 31.695 22.8889 31.695 24.8135 31.584C26.6269 31.621 28.3808 30.9466 29.6982 29.6953C30.9416 28.3775 31.6155 26.6234 31.5859 24.8096C31.697 22.8846 31.697 17.1164 31.5859 15.1914H31.5781C31.6151 13.3775 30.9422 11.6225 29.6914 10.3047C28.3739 9.06087 26.6194 8.38738 24.8135 8.41699ZM19.9951 10.4307C21.69 10.4307 25.3389 10.2978 26.8711 10.8975C27.885 11.2972 28.6921 12.104 29.0918 13.1182C29.6987 14.6508 29.5576 18.3016 29.5576 19.9971C29.5576 21.6927 29.6987 25.3425 29.0918 26.875C28.6921 27.8893 27.8851 28.6959 26.8711 29.0957C25.339 29.7028 21.6901 29.5625 19.9951 29.5625C18.3001 29.5625 14.6512 29.6954 13.1191 29.0957C12.1052 28.6959 11.2981 27.8893 10.8984 26.875C10.2916 25.3425 10.4326 21.6927 10.4326 19.9971C10.4326 18.3016 10.2989 14.6508 10.8984 13.1182C11.2981 12.1039 12.1052 11.2973 13.1191 10.8975C14.6512 10.2904 18.3001 10.4307 19.9951 10.4307ZM20.0029 14.0146C16.7018 14.0146 14.0225 16.6949 14.0225 19.9971C14.0227 23.299 16.702 25.9795 20.0029 25.9795C23.3037 25.9793 25.9832 23.2989 25.9834 19.9971C25.9834 16.7023 23.3181 14.0221 20.0244 14.0146H20.0029ZM20.0029 16.1094C22.1492 16.1096 23.8887 17.8501 23.8887 19.9971C23.8885 22.1439 22.1491 23.8836 20.0029 23.8838C17.8566 23.8838 16.1174 22.144 16.1172 19.9971C16.1172 17.8499 17.8565 16.1094 20.0029 16.1094ZM26.2275 12.3779C25.4578 12.3779 24.8359 13.0005 24.8359 13.7705C24.8362 14.5403 25.4579 15.1621 26.2275 15.1621C26.997 15.162 27.6189 14.5402 27.6191 13.7705V13.7627C27.6191 13.0002 26.9972 12.3781 26.2275 12.3779Z"
                    fill="#2FC977"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.tiktok.com/@smartphone.id.france"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM20.5156 18.2617L20.5107 23.8828C20.5106 25.3853 19.5426 26.6593 18.2002 27.1074C17.8106 27.2374 17.3893 27.2987 16.9512 27.2744C16.392 27.2433 15.8676 27.0732 15.4121 26.7979C14.4428 26.212 13.7854 25.1492 13.7676 23.9336C13.7396 22.0336 15.2605 20.4844 17.1396 20.4844C17.5105 20.4844 17.8668 20.5461 18.2002 20.6572V16.8438C17.8484 16.7911 17.49 16.7637 17.1279 16.7637C15.0713 16.7637 13.1475 17.6275 11.7725 19.1836C10.7332 20.3596 10.1099 21.8603 10.0137 23.4336C9.88765 25.5005 10.6362 27.4654 12.0879 28.915C12.3012 29.1278 12.5255 29.3256 12.7598 29.5078C14.0042 30.4754 15.5255 30.9999 17.1279 31C17.49 31 17.8484 30.9726 18.2002 30.9199C19.6972 30.6958 21.0789 30.0038 22.1689 28.915C23.5082 27.5775 24.2478 25.8011 24.2559 23.9111L24.2373 15.5176C24.8762 16.0156 25.5744 16.4282 26.3242 16.748C27.4905 17.2452 28.7273 17.4975 30 17.4971V13.7578C30.0009 13.7587 29.9901 13.7588 29.9893 13.7588C28.6881 13.7588 27.4875 13.3236 26.5234 12.5889C25.4178 11.7466 24.6233 10.5109 24.3428 9.08691C24.2733 8.73511 24.236 8.37204 24.2324 8H20.5156V18.2617Z"
                    fill="#2FC977"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/smartphone.id.france/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM22.5645 8.33398C19.2255 8.33398 17.041 10.3556 17.041 14.0166V17.2373H13.332V21.4619H17.041V31.667H21.6045V21.4619H25.0088L25.0146 21.4551L25.6631 17.2373H21.6113V14.4961C21.6113 13.3427 22.1759 12.2148 23.9912 12.2148H25.832V8.61914C24.7493 8.44419 23.6601 8.34695 22.5645 8.33398Z"
                    fill="#2FC977"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/smartphone-id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM10.3555 16.6475V30H14.4971V16.6475H10.3555ZM25.0332 16.3115C23.4285 16.2544 21.9252 17.0793 21.1133 18.4697H21.0557V16.6475H17.085V29.9932H21.2207V23.3838C21.2208 21.6442 21.5832 19.9619 23.708 19.9619C25.8324 19.9622 25.8643 21.949 25.8643 23.498V30H29.9941V22.6602C29.9941 19.0729 29.226 16.3115 25.0332 16.3115ZM12.3975 10C11.0655 10.0001 10 11.0925 10 12.4258C10.0002 13.7589 11.091 14.8314 12.4229 14.8252C13.7484 14.8125 14.8211 13.7335 14.8213 12.4004C14.8149 11.0671 13.7295 10 12.3975 10Z"
                    fill="#2FC977"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
