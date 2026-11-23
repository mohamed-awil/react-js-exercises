export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((contact) => contact.id !== action.payload);

    case "TOGGLE":
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorited: !contact.favorited }
          : contact,
      );

    case "EDIT":
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact,
      );
      default:
        return state;
  }
};

export const initialValue = [];
