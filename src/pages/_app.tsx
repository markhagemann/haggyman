import type { AppProps } from 'next/app';
import '../css/global.css';

const App = ({ Component, pageProps }: AppProps): React.JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
