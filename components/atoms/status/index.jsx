import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBolt } from "@fortawesome/free-solid-svg-icons";

const Status = (props) => {
  var icon;
  if (props.icon == "heart") {
    icon = faHeart;
  } else {
    icon = faBolt;
  }
  return (
    <>
      <FontAwesomeIcon icon={icon} />
      {props.text}
    </>
  );
};

export default Status;
