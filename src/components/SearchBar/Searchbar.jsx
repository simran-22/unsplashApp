import { useState } from "react";
import { Focus, Search } from "lucide-react";

const Searchbar = ({ setPhotos }) => {
  const [input, setInput] = useState("");

  const URL = `https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=mn9ZPlIMTxtdDBj1BY8ZV1yKzXtsFz9twbinqsFaQqQ`;
  function handleSearch(e) {
    if (e.key === "Enter") {
      fetch(URL)
        .then(function (r) {
          return r.json();
        })
        .then(function (item) {
          setPhotos(item.results);
        });
    }
  }
  return (
    <>
      <div className="flex-grow">
        <div className="w-full">
          <div className="flex items-center justify-center bg-gray-200 p-2 px-4 rounded-full gap-2 w-full ">
            <Search className="w-4 h-4" />
            <input
              className="bg-gray-200 focus:outline-none flex-grow "
              type="text"
              value={input}
              placeholder="Search high-resolution images"
              onKeyDown={handleSearch}
              onChange={function (e) {
                setInput(e.target.value);
              }}
            />
            <Focus className="w-4 h-4 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
