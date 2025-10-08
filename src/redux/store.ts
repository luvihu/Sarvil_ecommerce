import { createStore, applyMiddleware, compose } from "redux";
import type { Store, AnyAction } from "redux";
import rootReducer from "./reducer";
import type { RootState } from "./reducer";
import { thunk } from "redux-thunk";
import type { ThunkDispatch } from "redux-thunk";
import type { AuthState } from "./reducer/authReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 📌 Función para cargar el estado desde localStorage
const loadState = (): AuthState => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return { user: null, token: null, role: null, isLoggedIn: false }; // Si no hay token, no se carga estado

    return {
      user: JSON.parse(localStorage.getItem("user") || "null"),
      token,
      role: (localStorage.getItem("role") as "ADMIN" | null) || null,
      isLoggedIn: true,
    };
  } catch (error) {
    console.error("Error al cargar el estado desde localStorage:", error);
    return { user: null, token: null, role: null, isLoggedIn: false }; // Evita que se rompa la aplicación
  }
};

// 🌟 Solo persistimos user, token y role
const persistedState = {
  auth: loadState(),
};

const store: Store<RootState, AnyAction> = createStore(
  rootReducer,
  persistedState, 
  composeEnhancer(applyMiddleware(thunk))
);

// 📌 Suscribirse para actualizar `localStorage`
store.subscribe(() => {
  try {
    const { auth } = store.getState();
    if (auth.isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(auth.user));
      localStorage.setItem("token", auth.token || "");
      localStorage.setItem("role", auth.role || "");
    }   else {
      ["user", "token", "role"].forEach(key => localStorage.removeItem(key));
    }
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
});

export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type { RootState };
export default store;
