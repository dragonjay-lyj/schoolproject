import { Input,Button } from '@nextui-org/react';

import { useRef, type FormEventHandler } from 'react';

const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const query = searchInputRef.current?.value ?? '';
    if (query) {
      // 使用原生JavaScript重定向
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
  };


  return (
    <form id="search-form" onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
      ref={searchInputRef}
      type="text"
      id="query"
      name="query"
        variant="flat"
        color="primary"
        size="md"
        placeholder="搜索..."
        endContent={<span className="icon-[material-symbols--search]"><Button type="submit" className='w-4 h-4'></Button></span>}
        fullWidth
        required
        isClearable
      />
    </form>
  );
};

export default Search;