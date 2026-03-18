import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

export function Analytics() {
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    return null;
  }
  
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  );
}
