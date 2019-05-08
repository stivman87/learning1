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
//  вешаем обработчик событий на родителя кнопок, определяем, на какой кнопке был был клик,  
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
 });