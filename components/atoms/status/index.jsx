import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBolt,
  faFireFlameCurved,
  faArrowDownUpAcrossLine,
} from "@fortawesome/free-solid-svg-icons";

const Status = (props) => {
  var icon;
  if (props.icon == "heart") {
    icon = <FontAwesomeIcon icon={faHeart} />;
  } else if (props.icon == "power") {
    icon = <FontAwesomeIcon icon={faBolt} />;
  } else if (props.icon == "flame") {
    icon = <FontAwesomeIcon icon={faFireFlameCurved} />;
  } else if (props.icon == "trend") {
    icon = <FontAwesomeIcon icon={faArrowDownUpAcrossLine} />;
  }

  return (
    <>
      {icon}
      {props.text}
    </>
  );
};

export default Status;
