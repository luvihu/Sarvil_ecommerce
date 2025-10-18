import { createStore, applyMiddleware, compose } from "redux";
import type { Store, AnyAction } from "redux";
import rootReducer from "./reducer";
import type { RootState } from "./reducer";
import { thunk } from "redux-thunk";
import type { ThunkDispatch } from "redux-thunk";
import type { AuthState } from "./reducer/authReducer";
import type { IUser } from "../components/interfaces/Interfaces";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = (): AuthState => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return { user: null, token: null, isLoggedIn: false, error: null }; 
    const userRaw = localStorage.getItem("user");
    let user: IUser | null = null;

    if (userRaw) {
      const parsed = JSON.parse(userRaw);
      // ✅ Validación básica
      if (parsed && typeof parsed === 'object' && parsed.id && parsed.email) {
        user = parsed as IUser;
      }
    }

    return {
      user,
      token,
      isLoggedIn: !!user,
      error: null
    };
  } catch (error) {
    console.error("Error al cargar el estado desde localStorage:", error);
    return { user: null, token: null, isLoggedIn: false, error: null }; // Evita que se rompa la aplicación
  }
};

const persistedState = {
  auth: loadState(),
};

const store: Store<RootState, AnyAction> = createStore(
  rootReducer,
  persistedState, 
  composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => {
  try {
    const { auth } = store.getState();
    if (auth.isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(auth.user));
      localStorage.setItem("token", auth.token || "");
      
    }   else {
      ["user", "token"].forEach(key => localStorage.removeItem(key));
    }
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
});

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type { RootState };
export default store;
