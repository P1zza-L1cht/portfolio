import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faUserTie, faSchool, faBuilding, faShirt } from "@fortawesome/free-solid-svg-icons";
import '../styles/Experience.scss';

export default function Experience() {
  return(
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010.4 - 2013.3"
          iconStyle={{ background: "#2c6090", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="vertical-timeline-element-title">
            大阪桐蔭高等学校
          </h3>
          <p className="vertical-timeline-element-title">
            Osaka Toin Highschool
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013.4 - 2014.3"
          iconStyle={{ background: "#2c6090", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="vertical-timeline-element-title">
            浪人期間
          </h3>
          <p>I studied to entry Univesity.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014.3 - 2015.9"
          iconStyle={{ background: "#2c6090", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="vertical-timeline-element-title">
            琉球大学 理学部 物質地球化学科 物理系
          </h3>
          <p>University of Ryukyu Science Physics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015.10 - 2017.6"
          iconStyle={{ background: "#2c84a4", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faShirt} />}
        >
          <h3 className="vertical-timeline-element-title">
            枚方市 星ヶ丘洋裁学校に通う
          </h3>
          <p className="vertical-timeline-element-subtitle">
            レディースの洋服の作成、デザインの勉強をした
          </p>
          <p>ハンドメイドフリーマーケットで出店した</p>
          <p>Sewing School in Hoshigaoka</p>
          <p>I learned fashion design and sewing</p>
          <p>Opened a flea market</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015.10 - 2017.6"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBuilding} />}
        >
          <h3 className="vertical-timeline-element-title">
            ZARAの契約社員として働く
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            販売員
          </h4>
          <p>
            Worked in ZARA
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017.7 - 2017.12"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBuilding} />}
        >
          <h3 className="vertical-timeline-element-title">
            はるやまでアルバイトした
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            紳士服業界に入るためにはるやまで仕事しながらスーツについて勉強した
          </h4>
          <p>Worked with Haruyama (suits shop) </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019.3 - 2020.3"
          iconStyle={{ background: "#2c84a4", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faUserTie} />}
        >
          <h3 className="vertical-timeline-element-title">
            テーラー見習いとして仕事しながらスーツの勉強をした
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            メンズテーラードスーツの勉強、スラックスとジャケットの作成をした
          </h4>
          <p>Trained as a Tailor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019.2 - 2020.12"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBuilding} />}
        >
          <h3 className="vertical-timeline-element-title">
            ブラックレーベルにて働く
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            2018.2 - IDAの派遣社員として働く<br/>
            2018.11 - 三陽商会の契約社員になる<br/>
            2020.8 - 店長代理になる
            2020.12 適応障害になり退職
          </h4>
          <p>Worked in Blacklabel (mens fashion) as store sub manager</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021.3 - 現在"
          iconStyle={{ background: "#2c84a4", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            プログラミングの勉強を行う
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            2021.5 - DMMのプログラミング ブートキャンプに参加<br />
            2022.2 - 知り合いのwebサイトのコーディングをしたりしていた(Wordpressが多数)
          </h4>
          <p>Trained as a Programer and digital designer.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}