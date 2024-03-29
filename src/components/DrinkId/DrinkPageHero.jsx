import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { ButtonComponentThemeChange } from '../reUseComponents/Buttons/ButtonThemeChange';
import { MotivatingModal } from '../reUseComponents/MotivatingModal/MotivatingModal';

import { selectAuthUser } from '../../redux/auth/authSelectors';
import { addFavorite, deleteFavorite } from '../../redux/favorites/favoriteAPI';
import { useModal } from '../../hooks/useModal';
import API from 'services/axios';
import '../../i18n';

const DrinkPageHero = ({ cocktail }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { isOpen, toggleModal } = useModal();
  const [achievement, setAchievement] = useState(null);

  const currentLng = i18n.language;

  const {
    _id,
    drink,
    category,
    alcoholic,
    description,
    descriptionUK,
    drinkThumb,
    favorite,
  } = cocktail;

  const isFavoriteFirstRender = favorite?.includes(user.id);
  const [isFavorite, setIsFavorite] = useState(isFavoriteFirstRender);
  const isFav = isFirstRender ? isFavoriteFirstRender : isFavorite;

  const toggleFavorite = async (id) => {
    try {
      if (isFav) {
        await dispatch(deleteFavorite(id));
        setIsFavorite(false);
      } else {
        await dispatch(addFavorite(id));
        setIsFavorite(true);
        const { data } = await API.get('/users/achievements/add-to-favorites');
        if (data) {
          setAchievement(data);
          toggleModal();
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsFirstRender(false);
    }
  };

  return (
    <div className=" lg:flex justify-between">
      <div>
        <h2 className="mb-[8px] font-semibold text-[32px] leading-[1.19] text-gray-100 md:font-semibold md:text-[57px] md:leading-[1.07] lg:text-[64px] lg:leading-[1.06]">
          {drink}
        </h2>
        <p className="text-[12px] leading-[1.17] text-grey-text-color mb-[20px] md:text-[16px] md:leading-[1.25]">
          {t(`categories.${category}`)}/{t(`cocktailDiscr.${alcoholic}`)}
        </p>
        <p className="text-[14px] leading-[1.29] mb-[40px] text-gray-100 md:text-[16px] md:leading-[1.37] md:max-w-[593px]">
          {/* {description} */}
          {currentLng === 'uk' ? descriptionUK : description}
        </p>
        <div className="pt-10 pb-20">
          {isFav ? (
            <ButtonComponentThemeChange
              descr={t('button.toggleFavorite.ButtonComponentDel')}
              btnFunction={() => {
                toggleFavorite(_id);
                toast(`${t('toastError.DrinkPageHeroDel')}`);
              }}
              id={_id}
            />
          ) : (
            <ButtonComponentThemeChange
              descr={t('button.toggleFavorite.ButtonComponentAdd')}
              btnFunction={() => {
                toggleFavorite(_id);
                toast.success(`${t('toastError.DrinkPageHeroAdd')}`, {
                  icon: false,
                });
              }}
              id={_id}
            />
          )}
        </div>
      </div>
      <div>
        <img
          className="max-h-[400px] mb-[18px] w-[335px] rounded-xl  md:mb-[80px] md:w-[704px] md:object-cover lg:w-[400px] lg:mb-[100px] "
          src={drinkThumb}
          alt="poster cocktail"
        />
      </div>
      {achievement && isOpen && (
        <MotivatingModal
          achievementText={achievement.message}
          classNamesKey={achievement.classNamesKey}
          onClose={toggleModal}
        />
      )}
    </div>
  );
};

export default DrinkPageHero;
