import { Input } from '@nextui-org/react';

const Search = () => {

  return (
    <form id="search-form" className="flex items-center gap-2">
      <Input
      type="text"
      id="query"
      name="query"
        variant="flat"
        color="primary"
        size="md"
        placeholder="搜索..."
        endContent={<span className="icon-[material-symbols--search]"></span>}
        fullWidth
        required
        isClearable
      />
      <button
        type="submit"
        className="hidden w-4 h-4 transition duration-150 ease-in-out rounded-full group focus:outline-none"
        aria-label="Search"
      >
        {/* 这里可以使用TailwindCSS类样式控制按钮外观 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 text-primary group-hover:text-primary-lighter"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
};

export default Search;