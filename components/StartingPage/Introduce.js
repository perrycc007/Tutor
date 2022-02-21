import React from 'react';
import classes from './Introduce.module.css';
import Card from '../ui/Card';
import johny from '../image/John Sin.jpg';
import { CardActions } from '@mui/material';

function Introduce() {
  return (
    <div className= {classes.cards}>
      <div className={classes.cards__container}>
        <div className={classes.cards__wrapper}>
          <ul className={classes.cards__items}>
            <Card>
            <img className={classes.cards__item__img}  src = {johny}/>
              <header>準中學教師  Kwan Sir</header>
              <p>
                現為香港科技大學 Year 4學生。有四年豐富私補經驗，亦有一年到中學做實習老師的經驗，為成為全職教師而作準備。希望能以自己的經驗和能力幫助同學在Dse取得佳績，2022 Dser 加油 !'
              </p>
            </Card>
            <Card>
            <img className={classes.cards__item__img}  src = {johny}/>
              現就讀香港理工大學。有三年為傳統名校、地區名校中、小學生的補習經驗。本人教學有耐性， 用心，會提供自製筆記給學生，並樂意於課餘時間以WhatsApp解答學生問題。'
              香港理工大學屋宇設備工程生 Calvin Sir'
            </Card>
            <Card>
            <img className={classes.cards__item__img}  src = {johny}/>
              專補中小學生英文、中學物理和生物科。本人於 DSE 英文科Reading分卷取得 5**，另外於物理和生物科皆取得 5 的佳績。本人教學方式靈活 、有趣，會以自製精華筆記和分享個人心得來幫助不同程度的學生。'
              香港城市大學工商管理學生 Perry Sir
            </Card>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
