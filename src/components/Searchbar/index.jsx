import * as S from "./index.styles";
import FetchAPI from "../../Hooks/API";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Searchbar() {
  const [SearchInput, setSearchInput] = useState("");
  const [SearchResults, setSearchResults] = useState("");
  const { products } = FetchAPI("https://v2.api.noroff.dev/online-shop/");

  useEffect(() => {
    if (SearchInput.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = products.filter((product) => {
      return product.title
        .toLowerCase()
        .includes(SearchInput.toLocaleLowerCase());
    });
    setSearchResults(results);
  }, [products, SearchInput]);

  const HandleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <S.Searchbar
        onSubmit={(e) => e.preventDefault()}
        action="search"
        type="text"
        placeholder="Search..."
        value={SearchInput}
        onChange={HandleSearch}
      ></S.Searchbar>
      <S.SearchItems>
        {SearchResults.length === 0 && SearchInput.trim() !== " "
          ? " "
          : SearchResults.map((product) => (
              <Link
                to={`/src/Pages/ProductPage/${product.id}`}
                key={product.id}
              >
                <S.SearchResults>{product.title}</S.SearchResults>
              </Link>
            ))}
      </S.SearchItems>
    </div>
  );
}
