import { Separator } from "@ui/separator";
import Anchor from "@ui/anchor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <article className="prose mx-auto pt-6 dark:prose-invert md:prose-lg">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <em>Last updated: February 10, 2024</em>

      <p>
        Farid Nizam (“us”, “we”, or “our”) operates the fayln.com website (hereinafter referred to
        as the “Service”). This page informs you of our policies, by using our Services, you agree
        to the collection and use of information in accordance with this policy.
      </p>
      <p>
        I respect your privacy and am committed to protecting it through my compliance with this
        policy. Should they in future, this page will be updated and all relevant services will link
        to it.
      </p>

      <Separator className="m-auto w-44 bg-gray-400/90 dark:bg-gray-600" />

      <h2>This policy describes</h2>
      <ul>
        <li>Service: refers to the Website.</li>
        <li>
          Personal Data: personal Data means data about a living individual who can be identified
          from those data (or from those and other information either in our possession or likely to
          come into our possession).
        </li>
        <li>
          Usage Data: usage Data is data collected automatically either generated by the use of the
          Service or from the Service infrastructure itself (for example, the duration of a page
          visit).
        </li>
        <li>Cookies: cookies are small files stored on your device (computer or mobile device).</li>
      </ul>

      <h2>Information Collection And Use</h2>
      <p>
        We collect several different types of information for various purposes to provide and
        improve our Service to you.
      </p>
      <ol className="list-decimal">
        <li>Personal Data</li>
        <span>
          While using our Service, we may ask you to provide us with certain personally identifiable
          information that can be used to contact or identify you (“Personal Data”). Personally
          identifiable information may include, but is not limited to: <br />
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Non-personally identifiable personal data for usage</li>
          </ul>
        </span>
        <li>Usage Data</li>
        <span>
          We may also collect information on how the Service is accessed and used (“Usage Data”).
          This Usage Data may include information such as your computer’s Internet Protocol address
          (e.g. IP address), browser type, browser version, the pages of our Service that you visit,
          the time and date of your visit, the time spent on those pages, unique device identifiers
          and other diagnostic data.
        </span>
        <li>Cookies Data</li>
        <span>We do not use cookies.</span>
      </ol>

      <h2>Use of Data</h2>
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To provide analysis or valuable information so that we can improve the Service</li>
        <li>To monitor the usage of the Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      <h2>Service Providers</h2>
      <p>
        We may employ third party companies and individuals to facilitate our Service (“Service
        Providers”), to provide the Service on our behalf, to perform Service-related services or to
        assist us in analyzing how our Service is used and protecting against potential threats
        (DDoS, security exploit attempt, etc.).
      </p>
      <p>
        These third parties have access to your Personal Data only to perform these tasks on our
        behalf and are obligated not to disclose or use it for any other purpose.
      </p>
      <ul>
        <li>
          Cloudflare service is used across all web properties to provide CDN services and protect
          against security threats. For more information on the privacy practices of Cloudflare,
          please visit the following web page:{" "}
          <Anchor href="https://www.cloudflare.com/privacypolicy/" rel="nofollow" newWindow>
            https://www.cloudflare.com/privacypolicy/
          </Anchor>
        </li>
        <li>
          BunnyCDN service is used across all web properties to provide CDN services. For more
          information on the privacy practices of BunnyCDN, please visit the following web page:{" "}
          <Anchor href="https://bunny.net/privacy/" rel="nofollow" newWindow>
            https://bunny.net/privacy/
          </Anchor>
        </li>
        <li>
          Biznet Gio is used across all web properties to provide Object Storage services. For more
          information on the privacy practices of Biznet Gio, please visit the following web page:{" "}
          <Anchor href="https://www.biznetgio.com/legal#kebijakan-privasi" rel="nofollow" newWindow>
            https://www.biznetgio.com/legal#kebijakan-privasi
          </Anchor>
        </li>
      </ul>
    </article>
  );
}
