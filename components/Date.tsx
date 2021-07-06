import { parseISO, format } from "date-fns";

type Props = { dateString: string; displayTime?: boolean };

const Date: React.FC<Props> = ({ dateString, displayTime }) => {
  const dateFormat = displayTime ? "d.M.yyyy HH:mmh" : "d.M.yyyy";
  const date = parseISO(dateString);
  const formattedDate = format(date, "d.M.yyyy");
  const formattedTime = format(date, "HH:mm");
  const output = displayTime
    ? `${formattedDate} o ${formattedTime} h`
    : formattedDate;
  return <time dateTime={dateString}>{output}</time>;
};

export default Date;
