import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );
      let updatedItems;

      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
        totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(
        (item) => !(item.id === action.payload.id && item.size === action.payload.size)
      );
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
        totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
        totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem('nms_cart');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('nms_cart', JSON.stringify(cartState));
  }, [cartState]);

  const addToCart = (product, size) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, size } });
  };

  const removeFromCart = (productId, size) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId, size } });
  };

  const updateQuantity = (productId, size, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, size, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};