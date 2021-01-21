import React, { useState } from "react";
import "./Home.css";

import Beginner from "../../components/QuizSets/Beginner/Beginner";
import Busker from "../../components/QuizSets/Busker/Busker";
import LocalTalent from "../../components/QuizSets/LocalTalent/LocalTalent";
import HomeHeader from "../Header/HomeHeader";

const Home = () => {
  const [easyBeginner, setEasyBeginner] = useState([]);
  const [mediumBeginner, setMediumBeginner] = useState([]);
  const [hardBeginner, setHardBeginner] = useState([]);

  const [easyBusker, setEasyBusker] = useState([]);
  const [mediumBusker, setMediumBusker] = useState([]);
  const [hardBusker, setHardBusker] = useState([]);

  const [easyLocalTalent, setEasyLocalTalent] = useState([]);
  const [mediumLocalTalent, setMediumLocalTalent] = useState([]);
  const [hardLocalTalent, setHardLocalTalent] = useState([]);

  const props = {
    easyBeginner,
    setEasyBeginner,
    mediumBeginner,
    setMediumBeginner,
    hardBeginner,
    setHardBeginner,
    easyBusker,
    setEasyBusker,
    mediumBusker,
    setMediumBusker,
    hardBusker,
    setHardBusker,
    easyLocalTalent,
    setEasyLocalTalent,
    mediumLocalTalent,
    setMediumLocalTalent,
    hardLocalTalent,
    setHardLocalTalent,
  };

  return (
    <div className="home-page">
      <HomeHeader />

      <div className="main-page-body">
        <Beginner props={props} />

        {/* <div className="">BLOOMING ARTIST</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        <Busker props={props} />

        {/* <div className="">LOCAL UPCOMER</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        <LocalTalent props={props} />

        {/* <div className="">LOCAL SUPERSTAR</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">PROVINCIAL TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">PROVINCIAL SENSATION</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}

        {/* <div className="">COUNTRY TALENT</div>
        <div className="question-cards">
          <EasyCards />
          <MediumCards />
          <HardCards />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
