import classNames from "classnames/bind";
import styles from "./Box.module.scss";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, LayoutGroup } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import './style.css';

const cx = classNames.bind(styles);

// Compact Card
function CompactCard({ param, setExpanded }) {
    return (
        <motion.div
            className={cx("CompactCard")}
            layoutId="expandableCard"
            onClick={setExpanded}
        >
            <div className={cx("radialBar")} >
                <div className={cx('CircularProgressbar')}>
                    <CircularProgressbar
                        value={param.barValue}
                        text={`${param.barValue}%`}
                    />
                </div>
                <span>{param.title}</span>
            </div>
            <div className={cx("detail")} >
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },
            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
        },
    };

    return (
        <motion.div
            className={cx("ExpandedCard")}
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId="expandableCard"
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                {/* <UilTimes onClick={setExpanded} /> */} UtilIcon
            </div>
            <span>{param.title}</span>
            <div className={cx("chartContainer")} >
                <Chart options={data.options} series={param.series} type="area" />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    );
}

function Box({ props }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <LayoutGroup>
                {expanded ? (
                    <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
                ) : (
                    <CompactCard param={props} setExpanded={() => setExpanded(true)} />
                )}
            </LayoutGroup>
        </div>
    );
}

export default Box;
