import MenuFloating from "../../module/menuFloating/index";

import schedule from "../../styles/pages/schedule.module.css";

const Schedule = () => {
  return (
    <>
      <div className={schedule.mySchedule}>
        Meus Agendamentos
      </div>

      <MenuFloating />
    </>
  );
};

export default Schedule;
