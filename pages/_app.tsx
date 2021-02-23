import React from "react"
import Head from 'next/head'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '../styles/styles.scss'
// import "antd/dist/antd.dark.min.css"
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

function MyApp({ Component, pageProps }: AppProps) {
  Amplify.configure({...awsconfig, aws_appsync_authenticationType: "API_KEY", })
  Auth.configure(awsconfig)
  return <>
    <Head>
      <title>Steve Varley Reviews</title>
    </Head>
    <Component {...pageProps} />
  </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
