import { useBookContext } from "./BookStatusContext";
import { BiArrowBack } from "react-icons/bi";

export default function Search() {
  const { searchData, navigate, bookStatus, bookDispacher } = useBookContext();
  return (
    <div>
      <BiArrowBack size="2em" onClick={() => navigate("/")} />
      <input
        placeholder="Search books by title..."
        type="text"
        onChange={(e) => searchData(e.target.value)}
      />
      {bookStatus?.searchValue?.map((item) => {
        const { id, title, author, image } = item;
        return (
          <div key={id} className="box">
            <img src={image} width="100%" height="200px" alt="aa" />
            <h4>{title}</h4>
            <p>{author}</p>
            <select
              onChange={(e) =>
                bookDispacher({ type: e.target.value, payload: item })
              }
            >
              {" "}
              <option>Move To..</option>
              <option value="CURRENTLY_READING">Currently reading</option>
              <option value="WANT_TO_READ">Want to read</option>
              <option value="READ">Read</option>
              <option value="NONE">none</option>
            </select>
          </div>
        );
      })}
    </div>
  );
}
