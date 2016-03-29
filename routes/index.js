var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

var Days = "7 дней";

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
    TITLE: 'Праздники и корпоративы',
    BRAND: 'Аква Юна Лайф',
    TOWN: 'д. Красная горка, владение 9',
    PHONE: '8-969-017-36-57',
    EMAIL: 'banket.juna-life@mail.ru',
    CALLME: "Заказать звонок",
    ABOUT: "О нас",
    SERVICES: "Грантируем",
    PORTFOLIO: "Фото",
    CONTACT: "Контакты",
    H1:  "Праздники и корпоративы",
    SLOGAN: "БОЛЕЕ 5 ЛЕТ НАШЕ EVENT АГЕНТСТВО ЗАНИМАЕТСЯ ОРГАНИЗАЦИЕЙ: <br>Среднее время подготовки "+ Days,
    ACTION: "Рассчитать праздик",
    WHYUS: "НАШИ ПРЕИМУЩЕСТВА",
    AVAILABILITY:"Празник в любой день",
    AVAILABILITYNOTE:"Для Вашего удобства мы работаем, готовим и проводим мероприятия 7 дней в неделю",
    CENTERTOWN:"Гарантия результата",
    CENTERTOWNNOTE:"Мы всегда организуем мероприятия в установленные сроки, даже если для этого есть всего несколько дней",
    WITHLOVE: "Работаем под ключ",
    WITHLOVENOTE: "Мы занимаемся полностью всем: от проработки концепции, оформления зала до подготовки аппаратуры, меню, подарков и мн. др.",  
    PROFMAKEUP: "Лучшие ведущие",	
    PROFMAKEUPNOTE: "Для проведения яркого мероприятия мы приглашаем только лучших ведущих и подбираем лучшие площадки",
    CONTACTUS: "Свяжитесь с нами!",
	CONTACTUSNOTE: "Ждем ваших звонков",
    EXAMPLES: "Фото",
    PORTCATEGORY1: "Свадьбы",
    PORTNAME1: "Дизайнер - флорист",    
    PORTCATEGORY2: "Свадьбы",
    PORTNAME2: "Букеты",    
    PORTCATEGORY3: "5 залов",
    PORTNAME3: "для 30 - 700 гостей",    
    PORTCATEGORY4: "Автоматы",
    PORTNAME4: "Расчет мощностей",    
    PORTCATEGORY5: "Коктельные Вечеринки",
    PORTNAME5: "Лучшие бармены",    
    PORTCATEGORY6: "Дни Рождения",
    PORTNAME6: "Детские праздники с аниматорами",    
    CALLTOACTION: "Заказать консультацию",
    SIGNUP: "Рассчитать цену празника <b style=\"text-decoration: underline;\">Беплатно</b>",
    BOOM:"ДО "+today+" действует АКЦИЯ!",
    BOOMNOTE:"...",
    BOOMBUTTON:"Получить купон",
    MODALHEADER:"Введите информацию о себе",
    SEND:"Отправить",
    CLOSE:"Закрыть"

}
  res.render('index', pageWordsetup);
});

module.exports = router;
