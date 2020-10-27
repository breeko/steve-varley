// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import 'antd/dist/antd.css'
// import "antd/dist/antd.dark.min.css"
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: why is this not auto-generated?
  Amplify.configure({...awsconfig, aws_appsync_authenticationType: "API_KEY", })
  return <Component {...pageProps} />
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
