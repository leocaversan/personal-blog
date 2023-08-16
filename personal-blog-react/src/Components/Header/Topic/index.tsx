import { ITopic } from "../../../Props/props";
import style from './Topic.module.css';

const Topic = ({description ,onClick} : ITopic) => {
    return (
        <p  className={style.header__central_menu}
            onClick={onClick}>
            {description}
        </p>
    );
};

export default Topic;