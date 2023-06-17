import "./styles.css";
import { BsSearch } from "react-icons/bs";
import { useBookContext } from "./BookStatusContext";

export default function Home() {
  const { navigate, bookStatus, bookDispacher } = useBookContext();
  return (
    <div className="container">
      <h3>All Books</h3>
      <BsSearch size="2em" onClick={() => navigate("/search")} />

      <h3>Currently reading</h3>
      <div className="area">
        {bookStatus.currentlyReading.map((item) => {
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
      <h3>Want to read</h3>
      <div className="area">
        {bookStatus.wantToRead.map((item) => {
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
      <h3>Read</h3>
      <div className="area">
        {bookStatus.read.map((item) => {
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
    </div>
  );
}
