'use client';

import { createContext, useReducer, useContext, useEffect } from 'react';

const StoreContext = createContext();

const initialState = {
  cart: [],
  favourites: [],
  isCartOpen: false,
};

function storeReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
          isCartOpen: true, // open cart drawer when adding item
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity || 1 }],
        isCartOpen: true,
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case 'TOGGLE_FAVOURITE': {
      const isFavourite = state.favourites.some((item) => item.id === action.payload.id);
      if (isFavourite) {
        return {
          ...state,
          favourites: state.favourites.filter((item) => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    }
    case 'SET_CART_OPEN':
      return {
        ...state,
        isCartOpen: action.payload,
      };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('femina_cart');
    const savedFavs = localStorage.getItem('femina_favourites');
    if (savedCart) {
      JSON.parse(savedCart).forEach(item => dispatch({ type: 'ADD_TO_CART', payload: item }));
    }
    if (savedFavs) {
      JSON.parse(savedFavs).forEach(item => dispatch({ type: 'TOGGLE_FAVOURITE', payload: item }));
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('femina_cart', JSON.stringify(state.cart));
    localStorage.setItem('femina_favourites', JSON.stringify(state.favourites));
  }, [state.cart, state.favourites]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
