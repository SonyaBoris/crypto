import s from "./index.module.css"
import EDIT from "../../shared/assets/img/edit.svg"
import COPY from "../../shared/assets/img/copy.svg"

import UserMenu from "../UserMenu"
import { mockUser } from "../../entities/user/api/data"

const ProfileBlock = () => {
  return (
    <div className="content-block">
      <div className={s.head}>
        <h3 className="title-text">Profile</h3>
        <UserMenu />
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