import { parseISO, format } from "date-fns";

type Props = { dateString: string; displayTime?: boolean };

const Date: React.FC<Props> = ({ dateString, displayTime }) => {
  const dateFormat = displayTime ? "d.M.yyyy - HH:mm" : "d.M.yyyy";
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, dateFormat)}</time>;
};

export default Date;
