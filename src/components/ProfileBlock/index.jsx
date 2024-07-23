import s from "./index.module.css"
import HEAD from "../../assets/img/head.svg"
import NOTIFICATIONS from "../../assets/img/colocol.svg"
import SET from "../../assets/img/setting.svg"
import USER from "../../assets/img/avatar.png"
import EDIT from "../../assets/img/edit.svg"
import COPY from "../../assets/img/copy.svg"
import { mockUser } from "../Greet"

const ProfileBlock = () => {
  return (
    <div className="content-block">
      <div className={s.head}>
        <h3 className="title-text">Profile</h3>
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
      </div>
      <div className={s.table}>
        <div className={s.row}>
          <span>Profile ID</span>
          <span className="title-text">{mockUser.id}</span>
        </div>
        <div className={s.row}>
          <span>User name</span>
          <span className="title-text">{mockUser.name} {mockUser.lastName}</span>
          <button>
            <img src={EDIT} />
          </button>
        </div>
        <div className={s.row}>
          <span>Wallet address</span>
          <span className="title-text">{mockUser.wallet}</span>
          <button>
            <img src={COPY} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileBlock;