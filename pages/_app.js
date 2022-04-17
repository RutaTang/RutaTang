import '../styles/globals.css'
import awsExports from '../src/aws-exports'
import { Amplify, API, Auth} from "aws-amplify";
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
