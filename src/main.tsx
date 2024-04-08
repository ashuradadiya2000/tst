import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./redux/store";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";

import App from "./App.tsx";

import "react-toastify/dist/ReactToastify.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@assets/homeAssets/assets/css/footer.css";
import "@assets/homeAssets/assets/css/inner-page.css";
import "@assets/homeAssets/assets/css/style.css";
import "@assets/homeAssets/assets/css/header.css";
import "@assets/homeAssets/assets/css/custom.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <ErrorBoundary>
            <PersistGate loading={null} persistor={persistor}>
                <React.Suspense fallback={<>Loading...</>}>
                    <App />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </React.Suspense>
            </PersistGate>
        </ErrorBoundary>
    </Provider>
);
