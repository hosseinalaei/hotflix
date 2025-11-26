"use client";
import { apiConfig } from "@/app/api/api";
import { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import { ModalHeader } from "../../Modal/ModalHeader";
import { ModalBody } from "../../Modal/ModalBody";
import SearchCard from "../../SearchCard/SearchCard";

const Search = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [term, setTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (term.length > 3) {
      const timeout = setTimeout(async () => {
        try {
          const res = await apiConfig.get(`/search?q=${term}&page=1`);
          setSearchResult(res.data);
        } catch (e) {
          console.log(e);
        }
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [term]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-search-icon lucide-search cursor-pointer"
        onClick={() => setSearchModal(true)}
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>

      <Modal
        isOpen={searchModal}
        onClose={() => setSearchModal(false)}
        closeOnOverlayClick={true}
      >
        <ModalHeader title="Search" onClose={() => setSearchModal(false)} />

        <ModalBody>
          <div className="mt-4">
            <input
              onChange={(e) => setTerm(e.target.value)}
              type="text"
              placeholder="search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          {searchResult.length > 0 && (
            <div className="grid grid-cols-5 gap-2">
              {searchResult.map((item: any) => {
                return (
                  <SearchCard
                    key={item.id}
                    poster={item.image}
                    title={item.title}
                    id={item.id}
                  />
                );
              })}
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Search;
