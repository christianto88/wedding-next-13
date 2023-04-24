import '../styles/global.css';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
