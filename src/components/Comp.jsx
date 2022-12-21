import { useState } from "react";
import "../App.css";

const Comp = () => {
  const tabMenu = ["tab1", "tab2", "tab3"];
  const [tab, setTab] = useState(0);

  return (
    <div className="compBody">
      <ul>
        {tabMenu.map((tab, i) => (
          <li
            key={tab}
            onClick={() => {
              setTab(i);
            }}
          >
            {tab}
          </li>
        ))}
      </ul>

      {tab === 0 && <div>엄마</div>}
      {tab === 1 && <div>아빠</div>}
      {tab === 2 && <div>제톰이</div>}
    </div>
  );
};

export default Comp;
