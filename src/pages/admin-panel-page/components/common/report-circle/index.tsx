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
          style={{
            strokeDashoffset:
              226.6 -
              (226.6 * (isNaN(percent) ? 1 : percent === -1 ? 100 : percent)) /
                100,
          }}
        ></circle>
      </svg>
      <div className={style.number}>
        <p>{isNaN(percent) ? "__" : percent === -1 ? "100+" : percent}%</p>
      </div>
    </div>
  );
};
