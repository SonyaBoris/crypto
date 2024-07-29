import s from "./index.module.css"
import HEAD from "../../assets/img/head.svg"
import NOTIFICATIONS from "../../assets/img/colocol.svg"
import SET from "../../assets/img/setting.svg"
import USER from "../../assets/img/avatar.png"

const UserMenu = () => {
  return (
    <div className={s.menu}>
      <button>
        <img src={HEAD} />
      </button>
      <button>
        <img src={NOTIFICATIONS} />
      </button>
      <button>
        <img src={SET} />
      </button>
      <button>
        <img src={USER} />
      </button>
    </div>
  );
}

export default UserMenu;