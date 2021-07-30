import "../styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import React from "react";
import App from "next/app";

import { init } from "@socialgouv/matomo-next";

const MATOMO_URL =
  "https://nextjsdl2je093qblacknumberthreevercelapp.matomo.cloud/";
const MATOMO_SITE_ID = 1;

class MyApp extends App {
  componentDidMount() {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
// <!-- Matomo -->
// <script type="text/javascript">
//   var _paq = window._paq = window._paq || [];
//   /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
//   _paq.push(['trackPageView']);
//   _paq.push(['enableLinkTracking']);
//   (function() {
//     var u="https://nextjsdl2je093qblacknumberthreevercelapp.matomo.cloud/";
//     _paq.push(['setTrackerUrl', u+'matomo.php']);
//     _paq.push(['setSiteId', '1']);
//     var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
//     g.type='text/javascript'; g.async=true; g.src='//cdn.matomo.cloud/nextjsdl2je093qblacknumberthreevercelapp.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
//   })();
// </script>
// <!-- End Matomo Code -->
