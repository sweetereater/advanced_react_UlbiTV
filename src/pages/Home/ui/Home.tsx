import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation('homePage');
  return (
    <div>
      {t("homePageTitle")}
    </div>
  )
}

export default Home;
