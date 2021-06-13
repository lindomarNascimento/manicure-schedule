import MenuFloating from "../../module/menuFloating/index";

import home from "../../styles/pages/home.module.css";

const Home = () => {
  return (
    <>
      <div className={home.informatives}>
        <h1 className={home.informativesTitle}>Informativos</h1>
        
        <span className={home.informativesContext}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishin
        </span>
      </div>

      <MenuFloating />
    </>
  );
};

export default Home;
