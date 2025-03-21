"use client";
import { useRouter } from "next/router";
import Image from "next/image";

const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  const router = useRouter();

  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get("name") as string;

  if (name) {
    router.push(`/list?name=${name}`);
  }
};

const SearchBar = () => {
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
