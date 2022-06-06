import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Description.scss';

export default function Description() {
  const [isLangToggle, setIsLangToggle] = useState(true);
  const iconStyle = {marginRight: 10,fontSize: 35};
  const navi = useNavigate();
  var toggleBtn;

  if (isLangToggle) {
    toggleBtn=(
      <FontAwesomeIcon icon={faToggleOff} style={iconStyle}/>
    );
  } else {
    toggleBtn=(
      <FontAwesomeIcon icon={faToggleOn} style={iconStyle}/>
    )
  }

  return(
    <div className="descript">
      <p id="pc">
        デジタルデザイナー兼デベロッパーを目指し日々勉強中です。<br/>
        私は油井 陽輝(ゆい はるき)と申します。<br />
        プログラミングを通し、ユーザが使いやすいUI/UXデザイン、扱いやすいシステムを作りたいと考えプログラミング活動を行っています。<br />
        現在できること：ウェブデザイン制作　ロゴ作成　バナー作成　プログラミング　等々<br />
        <br />
        幼少期にドイツのミュンヘンに２年間住んでおり、ヨーロッパ諸国の街や人、物に関り海外のデザインや考え方に触れ、<br />
        高校、大学とダンスをしてきて表現について学び、社会に出てからは、服飾に興味を持ちアパレルで働きながら独学で勉強その後洋裁学校に通いテーラーに弟子入りし、洋服の作り方やデザインについて学びどのような服が着やすくて、使いやすいかを考え作って来ました。<br />
        服飾で色々学んでいる中で、服とプログラミングでもっとより良いデザインの在り方があると思いプログラミングも勉強を始めました。<br />
        現在はプログラミングの沼にはまっています。<br />
        将来、自分なりの考えたシステムで物を作り世の中に出したいです。<br />
        <br />
        Hello, I'm Haruki Yui, I learn and aspire to be Digital-designer and developer in Japan.<br />
        Act to make UI/UX design and systems for user friendly.<br />
        Activities: Website design and systems, Logo, Banner, Programing easy systems etc...<br />
        <br />
        I lived in Munhen, Germany during two years when Middle school.<br/>
        Interested in dance, fashion, science, PC gadgets since high school.<br />
        After learn fashion design and how to make clothes, with school and tailor,  I want to make a systems with fashion,  with start to learn  programing with self-study and schools.<br />
        Now... I'll make a systems with anything to convenient, I can make it!
      </p>
      <div id="phone">
      <div
        className="lang-tog"
        onClick={() => {
          setIsLangToggle((prev) => !prev);
        }}
      >
        {toggleBtn}English
        </div>
          <p id={ isLangToggle ? "display" : "none"}>
            デジタルデザイナー兼デベロッパーを目指し日々勉強中です。<br/>
            私は油井 陽輝(ゆい はるき)と申します。<br />
            プログラミングを通し、ユーザが使いやすいUI/UXデザイン、扱いやすいシステムを作りたいと考えプログラミング活動を行っています。<br />
            現在できること：ウェブデザイン制作　ロゴ作成　バナー作成　プログラミング　等々<br />
            <br />
            幼少期にドイツのミュンヘンに２年間住んでおり、ヨーロッパ諸国の街や人、物に関り海外のデザインや考え方に触れ、<br />
            高校、大学とダンスをしてきて表現について学び、社会に出てからは、服飾に興味を持ちアパレルで働きながら独学で勉強その後洋裁学校に通いテーラーに弟子入りし、洋服の作り方やデザインについて学びどのような服が着やすくて、使いやすいかを考え作って来ました。<br />
            服飾で色々学んでいる中で、服とプログラミングでもっとより良いデザインの在り方があると思いプログラミングも勉強を始めました。<br />
            現在はプログラミングの沼にはまっています。<br />
            将来、自分なりの考えたシステムで物を作り世の中に出したいです。
          </p>
          <p id={ isLangToggle ? "none" : "display"}>
            Hello, I'm Haruki Yui, I learn and aspire to be Digital-designer and developer in Japan.<br />
            Act to make UI/UX design and systems for user friendly.<br />
            Activities: Website design and systems, Logo, Banner, Programing easy systems etc...<br />
            <br />
            I lived in Munhen, Germany during two years when Middle school.<br/>
            Interested in dance, fashion, science, PC gadgets since high school.<br />
            After learn fashion design and how to make clothes, with school and tailor,  I want to make a systems with fashion,  with start to learn  programing with self-study and schools.<br />
            Now... I'll make a systems with anything to convenient, I can make it!
          </p>
      </div>
      <div className="about-btn" onClick={() => {navi('/experience')}}>詳しく見る</div>
    </div>
  );
}