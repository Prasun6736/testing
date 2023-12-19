// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import langHome from '../utils/lang'

const Home = () => {
  // const { t } = useTranslation();
  const [switchState, setSwitchState] = React.useState(true);  
  const [data,setLang]=React.useState({
    lang : langHome.eng
  })
  function handleOnChange(e) {
    switch (e.target.checked) {
      case true:
        setLang({
          lang:langHome.eng
        })
        break;
    case false:
      setLang({
        lang:langHome.hindi
      })


        break;
    }
    setSwitchState(!switchState);
  }

  return (
    <>
      <div className="bg-slate-300 w-screen h-screen flex flex-col justify-center items-center gap-10">
      
      
      <input 
        id="checkbox" 
        type="checkbox" 
        checked={switchState}
        onChange={handleOnChange} />  



        <h1 className="text-2xl font-black text-slate-700">
          {data.lang.title}
        </h1>
        <div className="flex gap-10">
          <Link
            className="w-[220px] h-[100px] text-2xl bg-white rounded-xl flex justify-content items-center"
            to="login"
          >
            {data.lang.login}
          </Link>
          <Link
            className="w-[220px] h-[100px] text-2xl bg-white rounded-xl border-2 border-black shadow-xl hover:shadow flex justify-content items-center"
            to="register"
          >
            {data.lang.register}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
