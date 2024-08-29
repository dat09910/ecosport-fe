import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import Box from "~/layouts/components/Box";

const cx = classNames.bind(styles)

const cardsData = [
    {
      title: "Sales",
      color: {
        backGround: "rgb(255 255 255 / 1)",
        boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px",
      },
      barValue: 70,
      value: "25,970",
      png: 'UilUsdSquare',
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: 'UilMoneyWithdrawal',
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: 'UilClipboardAlt',
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
    {
        title: "Expenses",
        color: {
          backGround:
            "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
          boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: 'UilClipboardAlt',
        series: [
          {
            name: "Expenses",
            data: [10, 25, 15, 30, 12, 15, 20],
          },
        ],
      },
  ];

function Dashboard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                {cardsData.map((value, key) => {
                    return (
                        <div key={key}>
                            <Box props={value}  />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Dashboard;
