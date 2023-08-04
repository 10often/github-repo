import { useLocation, useNavigate } from 'react-router-dom';

interface IBackButtonHook {
  isPrevExist: boolean;
  back(): void;
}

export const useBackButton = (): IBackButtonHook => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPrevExist = location.key !== 'default';
  const back = () => navigate(-1);

  return { isPrevExist, back };
};
