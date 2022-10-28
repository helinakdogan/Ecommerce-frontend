import { createStore } from "redux"; //deprecated
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export function configureStore() {
    return createStore(rootReducer, devToolsEnhancer())
}

//redux devtools extension
