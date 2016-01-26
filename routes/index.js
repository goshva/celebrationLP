var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

var Days = "3 дня";

function formatDate(date) {
var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;var strTime = hours + ':' + minutes + ' ' + ampm;

return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() }

var now = new Date();
var today = formatDate(now);
var pageWordsetup = {
    TITLE: 'Электрик Кисловодск  - электромонтажные работы',
    BRAND: 'электрик кисловодск',
    TOWN: 'Кисловодск',
    PHONE: '8-928-346-84-68',
    EMAIL: 'electrickmv@gmail.com',
    CALLME: "Заказать звонок",
    ABOUT: "О нас",
    SERVICES: "Грантируем",
    PORTFOLIO: "Фото",
    CONTACT: "Контакты",
    H1:  "Электропроводка",
    SLOGAN: "Опытные инжинеры предоставляют услуги по электрике. <br>Среднее время выполнения работ "+ Days,
    ACTION: "<b style=\"text-decoration: underline;\">Беcплатный</b> вызов",
    WHYUS: "Почему стоит выбрать нас?",
    AVAILABILITY:"Цены доступные каждому",
    AVAILABILITYNOTE:"Нашим клиентам удобно когда заказы выполняются в срок, а мы сразу приступаем к следующему. Из-за этого мы можем себе позволить не заламливать цены, работая в конвеерном режиме",
    CENTERTOWN:"Экономия времени",
    CENTERTOWNNOTE:"Личный транспорт позволяет мастерам втечении часа с  момента вашего звонка приступить к оценке объёма работ по вашей заявке",
    WITHLOVE: "Работаем под ключ",
    WITHLOVENOTE: "Основные критерии для нас это: Пожелания и Безопастность  заказчика, Качество  Скорость работ<br> Этапы работ: оценка объемов, закупка комплектующих, работы, приёмка. Чёткая схема позволяет не теряя времени выполнять полный объем работ",  
    PROFMAKEUP: "Дипломированные Профессионалы",	
    PROFMAKEUPNOTE: "Помимо обязательной квалификации и допусков специалисты проходят строгий отбор по лчностным качествам и умениюию общятся с заказчиом",
    CONTACTUS: "Свяжитесь с нами!",
	CONTACTUSNOTE: "Ждем ваших звонков",
    EXAMPLES: "Примеры работ",
    PORTCATEGORY1: "Электропроводка",
    PORTNAME1: "Монтаж/ Демонтаж",    
    PORTCATEGORY2: "Розетки",
    PORTNAME2: "Подбор и установка",    
    PORTCATEGORY3: "Выключатели",
    PORTNAME3: "Подбор и уcтановка",    
    PORTCATEGORY4: "Автоматы",
    PORTNAME4: "Расчет мощностей",    
    PORTCATEGORY5: "Подсветка",
    PORTNAME5: "Навесные потолки",    
    PORTCATEGORY6: "Сигнализация",
    PORTNAME6: "Пожарная и Охранная система",    
    CALLTOACTION: "Оставте заявку на вызов мастера",
    SIGNUP: "Вызвать мастера <b style=\"text-decoration: underline;\">Беплатно</b>",
    BOOM:"ДО "+today+" действует АКЦИЯ!",
    BOOMNOTE:"Получить проект и подоборать проверенное оборудование вы сможете в любое время. <br><b>НО</b> лишь по акции вы можите получить скидку до 20% на весь спектр работ.<br><b> Не упустите момент.</b><br><i> Вы ничего не теряете  - получив скидочный купон вы сможите его использовать в течении полу гоода </i>",
    BOOMBUTTON:"Получить купон",
    MODALHEADER:"Введите информацию о себе",
    SEND:"Отправить",
    CLOSE:"Закрыть"

}
  res.render('index', pageWordsetup);
});

module.exports = router;
