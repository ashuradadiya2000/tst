import { compose, createStore } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
import { persistReducer, persistStore } from "redux-persist";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const persistConfig = {
    key: "book_ticket",
    storage,
    transforms: [
        encryptTransform({
            secretKey: import.meta.env.VITE_APP_STORAGE_SECRET_KEY,
            onError: function (error) {
                // Handle the error.
                console.log("global error damage", error);
            },
        }),
    ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers());

const persistor = persistStore(store);

export { store, persistor };
