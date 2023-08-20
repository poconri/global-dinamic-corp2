import React from "react";
import Head from "next/head";
import appDataEs from "@data/appEs.json";
import appDataEn from "@data/appEn.json";
import { useLanguage } from "../stores/use-languaje";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  const {isSpanish} = useLanguage();
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{(isSpanish ? appDataEs : appDataEn).settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
