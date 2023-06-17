import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookStatusReducer, { InitialValue } from "./BooksStatusReducer";

const BookContext = createContext();

export default function BookContextProvider({ children }) {
  const [bookStatus, bookDispacher] = useReducer(
    BookStatusReducer,
    InitialValue
  );
  const navigate = useNavigate();
  const searchData = (val) => {
    console.log(val);
    const filtered = bookStatus.booksCategories.find(({ title }) =>
      title.toLowerCase().includes(val.toLowerCase())
    );
    bookDispacher({ type: "SEARCH", payload: filtered });
  };
  return (
    <BookContext.Provider
      value={{ searchData, navigate, bookStatus, bookDispacher }}
    >
      {children}
    </BookContext.Provider>
  );
}

export const useBookContext = () => useContext(BookContext);
