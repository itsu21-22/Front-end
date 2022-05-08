import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./pages.css"
export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Стан водних ресурсів</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" >Збір інформації з водойм</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Проведення досліджень</Nav.Link>
                </Nav.Item>
           
                
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey="first">
                <div class="Container_about">
                  <div class="header_wrapper" >
                    <h2 class="header-center">Стан водних ресурсів</h2>
                      </div>
                  <div class="content_wrapper">
                    <div class="content">
                    Водні ресурси Львівщини відіграють важливу роль у житті людей та
економіки. Вода використовується, як джерело питного, технічного,
сільськогосподарського водопостачання, в рибному господарстві, в лікувальних
цілях, є джерелом поповнення запасів підземних вод, ін. Поверхневі води
Львівщини представлені річками, водосховищами, озерами та ставками.<br/>
Оскільки область розташована в межах Головного європейського вододілу, то
в ній переважають дрібні ріки – витоки основних річок Дністра і Західного Бугу.
Річки області відносяться до басейнів Чорного (Дністер, Стир) і Балтійського (Буг,
Сян) морів.</div>
<div class="content">
Із загальної кількості річок 8756, тобто 97%, мають протяжність до 10км, 176-
10-50км, 16- 50-100км і 3 - понад 100км (Дністер, Стрий, Західний Буг).
Середня густота річкової сітки в басейні Західного Бугу становить 0,35 км/км²,
у басейні Дністра від 0,7 км/км² (Передкарпаття) до1,5 км/км² (Карпати).
Поверхневі води на даний час продовжують належати до числа забруднених
природних ресурсів.</div>
<div class="content">
На екологічний стан поверхневих вод Львівської області впливають
різноманітні фактори, які тісно пов’язані, а саме: забруднення грунтів, атмосфери,
зміна ландшафтної структури та техногенне перевантаження території, неефективна
робота каналізаційно-очисних споруд, не винесення в натуру і картографічних
матеріалів прибережних захисних смуг і водоохоронних зон, а також їх
недодержання, насамперед в населених пунктах. Забруднення і засмічення річок
побутовими та іншими відходами, трелювання лісу по потоках у гірській місцевості.

</div>

                      
                  </div>
                  <div class="header_wrapper" >
                    <h2 class="header-center">Водозабезпеченість територій Львівської області</h2>
                      </div>

                      <div class="content_wrapper">
                    <div class="content">
                    Водозабезпеченість в області складає в рік 50% забезпеченості - 5,35 млрд.м3
,
у рік 95% забезпеченості - 3,0 млрд.м3
, і в середній по водності рік становить
1,82тис.м3
/чол
<div/>
<div class="content">
Згідно із статистичних даних форми 2-ТП (водгосп) забір води з природних
водних об’єктів області у 2016 році зменшився на 4,2 млн. м3
в порівнянні з
минулим роком і становить 177,7 млн. м3
.</div>
<div class="content">
У поточному році забір води з підземних водних об’єктів зменшився на 1,6
млн. м
3
, з 151,7 млн.м3
в 2015 р. до 150,1 млн. м3
в 2016 р. Зменшився на 2,6 млн.м3
забір води з поверхневих водних об’єктів і складає 27,6 млн. м3
(у 2015 р. – 30,2
млн.м
3
).</div>
<div class="content">
Використання свіжої води по області знизилось з 119,7 млн. м3
в 2015 р. до
118,8 млн. м3
в 2016 р., тобто на 0,9 млн. м3
. Використання води на господарськопитні потреби збільшилося в 2016р. на 1,63 млн. м
3
в порівнянні з минулим роком (з
55,0 млн. м3 до 56,63 млн. м3
). 
</div>
                    </div>
                    </div>
                    <div class="header_wrapper" >
                    <h2 class="header-center">Забруднення поверхневих вод</h2>
                      </div>
                      <div class="content_wrapper">
                        <div class="content">
                        Скид неочищених та недостатньо очищених комунальних і промислових
стоків внаслідок фізичного та морального зносу очисних споруд і відсутністю
коштів на будівництво, ремонт та їх реконструкцію. Внаслідок тривалої експлуатації
без необхідного поточного ремонту систем водопостачання і каналізації більшість
водопровідно-каналізаційних господарств області знаходяться в незадовільному
технічному стані, який щодня погіршується, частина з них в аварійному стані.
Протягом 2016 року водокористувачами Львівської області було скинуто в
поверхневі водні об’єкти 206,2 млн. м3
зворотних вод. У порівнянні з 2015 р.
загальний скид стоків зменшився на 1,5 млн м3
відповідно до зменшення забору
води з природних водних об’єктів.
У звітному році спостерігалось незначне збільшення скидів забруднених
стічних вод (з 45,08 млн м3
у 2015 р. до 46,08 млн м3
у 2016 р., тобто на 1,08 млн.
м
3
).</div>
<div class="content">
Скид нормативно - очищених вод збільшився на 0,5 млн. м3
(з 143,8 млн. м3
в
2015 р. до 144,3 млн. м3
в 2016 році).
Скид нормативно - чистих вод зменшився з 18,84 млн.м3
у 2015 р. до 15,72
млн.м
3
у 2016 р., тобто на 3,12 млн м3
.</div>
<div class="content">
Скид неочищених стічних вод з очисних споруд здійснюється в басейни
транскордонних річок (Дністер, Сян, Зах. Буг). Забруднення поверхневих вод
транскордонних річок може призвести до негативних наслідків з сторони
європейських країн (Польща, Молдова).
Другою важливою проблемою, що призводить до забруднення поверхневих
вод на території області є відсутність водоохоронних зон та прибережно-захисних
смуг водних об”єктів на території області.
                        </div>
                      </div>

                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">

                <div class="Container_about">
                  <div class="header_wrapper" >
                    <h2 class="header-center">Моніторинг водних ресурсів у м. Львові</h2>
                      </div>
                  <div class="content_wrapper">
                    <div class="content">
                      Спостереження за станом поверхневих вод у м. Львові здійснює
КП «Адміністративно – технічне управління» Львівської міської ради.
Протягом IV кварталу 2021 року були відібрані проби з озер, ставків,
потічків та річок. Всього досліджено 38 точок із яких проводився відбір проб
поверхневих вод.</div>
<div class="content">
Найбільшу кількість перевищень зафіксовано по таких забруднюючих
речовинах: завислі речовини - на 35 точках спостереження, залізо загальне - на
16, азот амонійний та аміак - на 14, БСК5 - на 12, фосфати – на 6 точках
спостереження.</div>
<div class="content">
За результатами хімічних аналізів, проведених протягом IV кварталу
2021 року, виявлено перевищення гранично допустимих концентрацій ГДК
забруднюючих речовин від 3 до 5 показників у 14 водоймах.<br/>
Найбільш забрудненими водними об’єктами за результатами спостережень
у IV кварталі стали: річка Марунька (об’їзна дорога); річка Полтва; потік
Білогорський; водойма по вул. Величковського (Рясне-2); потік в смт. Рудно
(Сигнівка) по вул. Панаса Сотника; річка Марунька перед оз. Винниківське
(500 м від дороги Львів - Винники); річка Зимна Вода (Вишенька); річка Зубра
(місток 300м від КНС); річка Зубра по вул. Хоткевича, 38; річка Млинівка
с. Гряда, нижче свиноферми.</div>
<div class="content">
У воді більшості з цих водних об’єктів зафіксовані перевищення
гранично допустимих концентрацій завислих речовин, заліза загального, азоту
амонійного та аміаку, БСК5, фосфатів.</div>
<div class="content">
Натомість, найчистішими без перевищень гранично допустимих
концентрацій забруднюючих речовин, або з показником по одному

перевищенню у IV кварталі виявилися такі водойми: водойма в с. Воля-
Гомулецька (відпочинковий комплекс «Альбатрос» найбільша за площею);

водойма у парку «Озеро Левандівське»; водойма по вул. Хуторівка, 35 (верхня);
водойма по вул. Стрийська - вул. Наукова; водойма в парку «Горіховий гай»;
водойма «Піщане» в смт Брюховичі біля залізничного переїзду; потік в с. Малі
Грибовичі (на місточку на вул. Івасюка); водойма «Бетонка» по вул. Антонича;
водойма по вул. Кульпарківська,139; водойма по вул. Рахівська - вул. Райдужна
(верхнє в каскаді).</div>
<div class="content">
Загалом у водоймах Львова визначали наявність та вміст таких
забруднюючих речовин: завислих речовин, заліза загального, азоту амонійного,
нітратів, нітритів, фосфатів, хлоридів, сульфатів, жирів, синтетичних
                        поверхнево-активних речовин (СПАР), БСК-5, ХСК, а також нафтопродуктів
                      </div>
                  </div>
                  <div class="header_wrapper" >
                    <h2 class="header-center">Інформація про об’єкти кризового моніторингу довкілля</h2>
                      </div>
                      <div class="content_wrapper">За інформацією департаменту з питань цивільного захисту Львівської
облдержадміністрації за 2021 рік (з 1 січня до 31 грудня 2021 року) на території
області виникло:
7 надзвичайних ситуацій:
                        <ul class="li_wrapper">
                          <li class="li_content">– НС природнього характеру об’єктового рівня, пов’язана зі сніговими
заметами (повне припинення руху транспорту на шляхах). Ознака 13 –
погіршення життєзабезпечення людей внаслідок припинення руху
автомобільного транспорту на обласних автомобільних дорогах місцевого
значення через вплив небезпечного природного явища (сильний снігопад,
сильна ожеледь, сильна хуртовина, снігові замети тощо) (за неможливості
об’їзду місця події іншими дорогами).</li>
                          <li class="li_content">– НС техногенного характеру місцевого рівня пов’язана з отруєнням
людей токсичними або іншими речовинами (окремі випадки). Ознака 3 –
загибель, отруєння або травмування людей внаслідок вибухів та пожеж (у тому
числі внаслідок отруєння чадним газом) у спорудах житлового призначення
(побутові пожежі).</li>
                          <li class="li_content">– НС техногенного характеру об`єктового рівня внаслідок руйнування
елементів транспортних комунікацій. Ознака 20 – погіршення
життєзабезпечення людей внаслідок припинення руху автомобільного
транспорту на автомобільних дорогах державного значення або на обласних
автомобільних дорогах місцевого значення через руйнування мостів, тунелів,
шляхопроводів, естакад (за неможливості об’їзду місця події іншими
дорогами).</li>
<li class="li_content">- НС природнього характеру об’єктового рівня, пов’язана з отруєнням
людей в результаті споживання неякісних продуктів харчування. Ознака 31 -
захворювання людей на небезпечні інфекційні хвороби: шигельоз (дизентерія)
та інші гострі кишкові інфекційні захворювання встановленої та невстановленої
етіології, сальмонельоз, вірусний гепатит А.</li>
<li class="li_content">- НС техногенного характеру регіонального рівня, пов’язана з
можливим порушенням нормальних умов життєдіяльності. Можуть
постраждати близько 70 060 осіб, у тому числі 289 закладів освіти; 15 закладів
соціального загального захисту; 16 закладів культури області.</li>
<li class="li_content">- НС техногенного характеру місцевого рівня, пов’язана із пожежею у
нежитловому приміщення під час якої загинули 3 особи. 14 жовтня о 21:18 год.
в м. Львові по вул. Городоцька, 371 в нежитловому приміщення (металевому
вагончику, розміром 4×3 м), розташованому на відкритій території стоянки для

38
великогабаритного автотранспорту виникла пожежа, внаслідок якої загинуло 3
особи (вік та стать встановлюється). Причина пожежі встановлюється.</li>
<li class="li_content">– НС техногенного характеру місцевого рівня пов’язана із пожежею у
спорудах житлового призначення (побутові пожежі) під час якої загинуло
3 особи. Ознака 3 – загибель, отруєння або травмування людей внаслідок
вибухів та пожеж (у тому числі внаслідок отруєння чадним газом) у спорудах
житлового призначення (побутові пожежі).</li>

                        </ul>
                      </div>
                </div>
                  


                </Tab.Pane>
                <Tab.Pane eventKey="third">
                
                <div class="Container_about">
                  <div class="header_wrapper" >
                    <h2 class="header-center">Проведення досліджень </h2>
                      </div>
                      <div class="content_wrapper">
                    <div class="content">
                    За результатами комплексної лабораторії спостережень за забрудненням
природного середовища Волинського центру з гідрометеорології, проводились моніторингові спостереження якості води басейнів.
                      </div>
<div class="header_wrapper" >
                      <img class="img_l" src ={require('./images/Lviv.png')} />
                      </div>
                         </div>
                         <div class="content_wrapper">
                    <div class="content">
                    З метою контролю якості очистки стічних вод у 2016 році на 23 підприємствах
було проведено 62 контрольних заміри на 30 випусках. Виконано 1039
компонентовизначень, за якими встановлено 226 перевищень допустимих
нормативів (21,8%). Зокрема, найбільше перевищень зафіксовано для таких
забруднюючих речовин:

                      </div>
                      <ul class="li_wrapper">
                          <li class="li_content">– Азот амонійний – 56,4 %;</li>
                          <li class="li_content">– БСК5 – 55,7 %;</li>
                          <li class="li_content">– ХСК – 53,2%;</li>
                          <li class="li_content">– Завислі речовини – 38,37 %</li>
                          <li class="li_content">– Нітрити – 29% замірів.</li>
</ul>
<div class="content">
Якість стічних вод визначалася за такими показниками: завислі речовини,
сухий залишок, БСК5, ХСК, СПАР, сульфати, хлориди, азот амонійний, нітрати,
нітрити, фосфати, залізо загальне, водневий показник, феноли, нафтопродукти,
жири, хром, цинк, мідь, свинець, кадмій, марганець.

                      </div>

                      </div>
                      <div class="header_wrapper" >
                    <h2 class="header-center">Детальна інформація </h2>
                      </div>
                      <div class="content_wrapper">
                      <ul class="li_wrapper"> 2021 р
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/file/d/1NnZHXR-vYSaDt7yCfswuuadw3Au5VlVj/view'>Стан довкілля у Львівській області за ІV квартал 2021 року</a></li>
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/file/d/1VT_xJtToUH1cPK94JMQ4p-WbSZBm7ou3/view'>Стан довкілля у Львівській області за ІІІ квартал 2021 року</a></li>
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/file/d/1YRaMaJfSdPHOcUGh1dDiI-3lEpsj2qgK/view?usp=sharing'>Стан довкілля у Львівській області за ІІ квартал 2021 року</a></li>
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/file/d/1NUzCmMhqIj_PpZuAWVF_6eAb6H--P7HL/view?usp=sharing'>Стан довкілля у Львівській області за травень 2021 року</a></li>
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/drive/folders/1dpNojjotg4jaKDtTJi4Gmptwy2c-49CQ?usp=sharing'>Стан довкілля у Львівській області за квітень 2021 року</a></li>

                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/drive/folders/13JHJ0Y-72dd-XwxzDIgXRAXqARpY1M6C?usp=sharing'>Стан довкілля у Львівській області за березень 2021 року</a></li>
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/drive/folders/188iO8mPzBesMVU7AR5bAKWIE0SR01eb6?usp=sharing'>Стан довкілля у Львівській області за лютий 2021 року</a></li>
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/drive/folders/1sTRj3QnJQv3Z3FkyASrAzrz2Dt-4AQmK?usp=sharing'>Стан довкілля у Львівській області за січень 2021 року</a></li>
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/file/d/1NUzCmMhqIj_PpZuAWVF_6eAb6H--P7HL/view?usp=sharing'>Стан довкілля у Львівській області за травень 2021 року</a></li>
                          <li class="li_content" ><a class="ref_cont" href='https://drive.google.com/file/d/1T8y2ni7JmAOLHN-2biK_uu-GQcuqVd7X/view?usp=sharing'>Стан довкілля у Львівській області у І кварталі 2021 року</a></li>
                          
</ul>

                      </div>




                      </div>

                </Tab.Pane>
                
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
