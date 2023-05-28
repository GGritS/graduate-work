import { FC } from "react";
import { useStyles } from "./style";

type ReportCircleProps = {
  percent: number;
};

export const ReportCircle: FC<ReportCircleProps> = ({ percent }) => {
  const style = useStyles();
  return (
    <div className={style.progress}>
      <svg className={style.svg}>
        <circle
          cx={38}
          cy={38}
          r={36}
          className={`${style.circle} ${style.circleBackground}`}
        ></circle>
        <circle
          cx={38}
          cy={38}
          r={36}
          className={`${style.circle} ${style.circleFill}`}
          style={{ strokeDashoffset: 226.6 - (226.6 * percent) / 100 }}
        ></circle>
      </svg>
      <div className={style.number}>
        <p>{percent}%</p>
      </div>
    </div>
  );
};
