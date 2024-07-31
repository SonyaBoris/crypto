import s from "./index.module.css"
import HEAD from "../../shared/assets/img/head.svg"
import NOTIFICATIONS from "../../shared/assets/img/colocol.svg"
import SET from "../../shared/assets/img/setting.svg"
import USER from "../../shared/assets/img/avatar.png"

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