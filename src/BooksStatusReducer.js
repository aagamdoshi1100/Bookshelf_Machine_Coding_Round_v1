import { Books } from "./Books";
export const InitialValue = {
  booksCategories: [...Books],
  wantToRead: [...Books.filter(({ wantToRead }) => wantToRead)],
  currentlyReading: [
    ...Books.filter(({ currentlyReading }) => currentlyReading)
  ],
  read: [...Books.filter(({ read }) => read)],
  none: [],
  searchValue: []
};

export default function BookStatusReducer(state, action) {
  switch (action.type) {
    case "CURRENTLY_READING":
      return {
        ...state,
        currentlyReading: [...state.currentlyReading, action.payload],
        wantToRead: [
          ...state.wantToRead.filter(({ id }) => id !== action.payload.id)
        ],
        read: [...state.read.filter(({ id }) => id !== action.payload.id)]
      };
    case "WANT_TO_READ":
      return {
        ...state,
        wantToRead: [...state.wantToRead, action.payload],
        currentlyReading: [
          ...state.currentlyReading.filter(({ id }) => id !== action.payload.id)
        ],
        read: [...state.read.filter(({ id }) => id !== action.payload.id)]
      };
    case "READ":
      return {
        ...state,
        read: [...state.read, action.payload],
        currentlyReading: [
          ...state.currentlyReading.filter(({ id }) => id !== action.payload.id)
        ],
        wantToRead: [
          ...state.wantToRead.filter(({ id }) => id !== action.payload.id)
        ]
      };
    case "NONE":
      return {
        ...state,
        none: [...state.none, action.payload]
      };
    case "SEARCH":
      return {
        ...state,
        searchValue: [action.payload]
      };
    default:
      return state;
  }
}
