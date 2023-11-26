import { FilterCombobox } from '@/components/shared/filters';
import { LocalSearchBar } from '@/components/shared/search';
import { HOME_PAGE_FILTERS } from '@/constants/filters';
import HomeFilters from '@/containers/home/HomFilters';

const HomeHeader = () => {
  return (
    <section className="mt-10 flex flex-col">
      <div className="flex items-center gap-5">
        <LocalSearchBar />
        <FilterCombobox filters={HOME_PAGE_FILTERS} triggerClassName="" />
      </div>

      <HomeFilters />
    </section>
  );
};

export default HomeHeader;
