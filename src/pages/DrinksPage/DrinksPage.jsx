import { useEffect } from 'react';

import { PageTitle } from 'components/reUseComponents/PageTitle';
import { DrinksSearch } from 'components/Drinks/DrinksSearch';
import { Drinks } from 'components/Drinks/Drinks';

const DrinksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className=" dark:bg-common-set
    md:dark:bg-common-set-tablet lg:dark:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <div className="container mx-auto pb-[80px]">
        <PageTitle title="Drinks" />
        <DrinksSearch />
        <Drinks />
      </div>
    </div>
  );
};

export default DrinksPage;
