import "../styles/global.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
        <Component {...props.pageProps} />
    </Provider>
  );
}

