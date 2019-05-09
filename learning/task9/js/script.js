 window.addEventListener('DOMContentLoaded', function() {
            
            'use strict';

    let tab = document.getElementsByClassName('info-header-tab'),
        info =document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
//  скрываем табы
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
//  все кроме первого
    hideTabContent(1);
//  добавляем класс show, который показвает нужный нам таб
    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
//  вешаем обработчик событий на родителя кнопок, определяем, 
//  на какой кнопке был был клик,  
//  и показываем тат таб, индекс которого соответствует номеру кнопки.
    info.addEventListener('click', function(event) {
        let target = event.target;

        if(target &&  target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Timer
    let deadline = '2019-06-03';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60)));
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
            
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
           let t = getTimeRemaining(deadline);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            //  ставлю ноль перед цифрой
            if(t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            }
            if(t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            }
            if(t.hours < 10) {
                hours.textContent = '0' + t.hours;
            }

            //  остановить таймер, если отчёт закончен
            if(t.total <=0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);

 });