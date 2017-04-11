'use strict';

        // Это своеобразный обратный отсчет, который в качестве аргумента принимает количество ДНЕЙ, ЧАСОВ, МИНУТ И СЕКУНД. Изменить исходные аргументы можно в пункте 2. Каждую секунду указанный промежуток времени уменьшается на одну секунду и меняет количество доступных для вывода дней, часов, минут и секунд. Которые, в свою очередь, можно выводить куда заблагорассудится: менять это можно в пункте 1.

        // 1. Сюда записываем, в блоки с какими селекторами будем помещать ЦИФРЫ
        var outDays = document.querySelectorAll('.js-timer-days'),
            outHours = document.querySelectorAll('.js-timer-hours'),
            outMinutes = document.querySelectorAll('.js-timer-minutes'),
            outSeconds = document.querySelectorAll('.js-timer-seconds'),

// 2. Здесь указываем необходимое количество времени в обратном отсчёте
            timeoutTime = {
                days: 3,
                hours: 8,
                minutes: 53,
                seconds: 22
            },

// 3. В переменную ниже записывается "отпечаток" указанного промежутка времени в виде количества миллисекунд
            timeoutTimestamp = timeoutTime.days * 24 * 60 * 60 * 1000 + timeoutTime.hours * 60 * 60 * 1000 + timeoutTime.minutes * 60 * 1000 + timeoutTime.seconds * 1000;
        // 4. Эта функция при вызывании отнимает 1 секунду от общего количества секунд в "отпечатке" и исходя из измененного "отпечатка" меняет количество дней/часов/минут/секунд и выводит их в блоки с указанными в начале кода селекторами
        function timeoutCounter() {
            timeoutTimestamp -= 1000;
            var timeoutDays = Math.floor(timeoutTimestamp / (24 * 60 * 60 * 1000));
            var timeoutHours = Math.floor(timeoutTimestamp / (60 * 60 * 1000)) - timeoutDays * 24;
            var timeoutMinutes = Math.floor(timeoutTimestamp / (60 * 1000)) - timeoutDays * 24 * 60 - timeoutHours * 60;
            var timeoutSeconds = Math.floor(timeoutTimestamp / 1000) - timeoutDays * 24 * 60 * 60 - timeoutHours * 60 * 60 - timeoutMinutes * 60;
            outDays.forEach(function (outDay) {
                return outDay.textContent = timeoutDays;
            });
            outHours.forEach(function (outHour) {
                return outHour.textContent = timeoutHours;
            });
            outMinutes.forEach(function (outMinute) {
                return outMinute.textContent = timeoutMinutes;
            });
            outSeconds.forEach(function (outSecond) {
                return outSecond.textContent = timeoutSeconds;
            });
        }
        // 5. С помощью setInterval указанная в нем функция вызывается каждые 1000мс, то есть каждую секунду
        setInterval(timeoutCounter, 1000);

$(document).ready(function(){
  $('.slider-acquaintance').slick({
   	arrows : false,
  });
});

$('.slider-brands').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/arrow-left.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='../img/arrow-right.png'>"
});
