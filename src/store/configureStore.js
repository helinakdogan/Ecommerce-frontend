import { createStore } from "react-redux"; //kontrol et
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export function configureStore(){
    return createStore(rootReducer,devToolsEnhancer())
}

//redux devtools extention kur 2.24