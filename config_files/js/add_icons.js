

function setIconSize(iconId, size) {
	let element = document.querySelector("#" + iconId + " svg");

	element.style.height = size.toString() + "px";
	element.style.width  = size.toString() + "px";
}

function getLineHeight(titleId) {
	//console.log(id);
	let parent = document.getElementById(titleId);
	let titleTag = parent.children[0].tagName;
	let parentStyle = window.getComputedStyle(parent.querySelector("#" + titleId + " > " + titleTag + "> div"));
	return parseFloat(parentStyle['height']);
}


function getHeaderId(iconId) {
    let reg = /(.*?)_/;//let reg = /(.*)_.*_/
	return iconId.match(reg)[1];
}

function setIconStyle(iconId) {
	//console.log(iconId);
	// if elements is not wihtin this page
	try { 
		let size = getLineHeight(getHeaderId(iconId)); 
	    size = size * 0.8;

	    setIconSize(iconId, size);
	} 
	catch(e) {}//console.log(e)}
	
}




function bindEdit() {
    $(".edit").click(
        function(e){
            alert(this.id);
	});
}


function showCommentWindow(commentId) {
	//$("#commentWindow").css("display", "block");
	//$("#commentWindow").css("color", "red");
	//event.preventDefault();
	$('#comment-background').addClass('is-visible');
 
	$('#comment-background').on('click', function(event){
		if( $(event.target).is('#comment-cancel-button .button') || 
			$(event.target).is('#comment-background')) {
    
			event.preventDefault();
			$(this).removeClass('is-visible');
		}

	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    }); 

	$("#comment-submit-button").click(function(){
		location.reload();
		$("#comment-window form")[0].reset();
	});
    

}


function hideCommentWindow() {


}


function alertDoneMessage() {
    
}


function bindComment() {
    $(".comment").click(function(e){
        alert(this.id);
        showCommentWindow(this.id);
	});

}

function showIcons() {
	$(".comment").css("display", 'inline-block');
	// $(".comment svg").css("height", '20px');
	$(".edit").css("display", 'inline-block');
	$("h1 .comment").css("display", 'none');
	$("h1 .edit").css("display", 'none');
}

function main() {
    
	let iconsIds = ['Выход-в-пространство_print_edit', 'Факт-8_print_comment', 'Факт-10_fact10_edit', 'Факт-1_fact1_edit', 'Коники_print_edit', 'Задача-4_problem4_edit', 'Как-читать-эту-книгу_foreword_edit', 'Доказательства-свойств_inversion_comment', 'Теория_print_edit', 'Точка-Микеля_miquel_point_comment', 'Методы_index_comment', 'События_news_comment', 'Доказательство-2_print_comment', 'Примечание_print_comment', 'Преобразования-плоскости_transformations_edit', 'Точка-Микеля_print_edit', 'Подсказка-11_print_comment', 'Подсказка-2_print_comment', 'Подсказка-5_print_edit', 'Примечание_fact9_comment', 'Рисунок_fact10_edit', 'Недавно-прошедшие_news_edit', 'Подсказка_fact8_comment', 'Рисунок-10_print_comment', 'Изогональное-сопряжение_isogonal_comment', 'Подсказка-6_print_edit', 'Факт-8_print_edit', 'Решение_print_comment', 'Необходимость_fact3_comment', 'Рисунок_fact13_comment', 'Задача-5_print_edit', 'Проективные-преобразования_print_comment', 'Свойства-1_print_comment', 'Замечательные-свойства-коник_print_comment', 'Рисунок-6_print_comment', 'Подсказка_fact5_comment', 'Доказательства-свойств_print_edit', 'Факт-7_print_comment', 'Рисунок_fact7_edit', 'Свойства_homothetic_edit', 'Доказательство-7_print_edit', 'При-решении-задач_homothetic_edit', 'Доказательство-1_print_edit', 'Примечание-1_print_comment', 'Рисунок_fact9_edit', 'Рисунок_problem1_edit', 'Рисунок_problem3_edit', 'Доказательство_fact12_edit', 'Рисунок-11_print_edit', 'Факты_index_edit', 'Доказательство_fact9_comment', 'Доказательства-свойств_print_comment', 'Свойства-1_print_edit', 'Доказательство-11_print_edit', 'Теория_theory_edit', 'Поворот-вектора_print_edit', 'Рисунок-15_print_edit', 'Площадь_area_comment', 'Рисунок-2_print_comment', 'Доказательство_problem2_edit', 'Доказательство-4_print_edit', 'Рисунок-7_print_comment', 'Достаточность_fact12_comment', 'Что-я-могу-тут-найти_index_edit', 'Проективные-преобразования_print_edit', 'Дополнение_index_edit', 'Замечательные-свойства-коник_angle_prop_conics_edit', 'Задача-1_problem1_edit', 'Задачи_index_comment', 'Рисунок_fact2_edit', 'Подсказка_fact8_edit', 'Подсказка_problem5_comment', 'Обновления_print_edit', 'Примечание_fact4_edit', 'Предисловие_foreword_comment', 'Что-я-могу-тут-найти_index_comment', 'Достаточность_print_comment', 'Поворот-вектора_rotate_vector_edit', 'Теория-1_print_comment', 'Рисунок_problem1_comment', 'Рисунок_problem2_edit', 'При-решении-задач_print_comment', 'Решение_print_edit', 'Подсказка_fact6_edit', 'Рисунок_problem2_comment', 'Рисунок_fact12_comment', 'Подсказка-9_print_comment', 'Задачи-1_print_edit', 'Факты_foreword_comment', 'Проективные-преобразования_projective_comment', 'Задача-1_problem1_comment', 'Касание_touching_edit', 'Использование-гомотетии_homothetic_comment', 'Гомотетия_print_edit', 'Доказательство_problem3_comment', 'Рисунок_fact5_comment', 'Доказательства-свойств_orthocenter_edit', 'Факт-12_fact12_edit', 'Методы_print_edit', 'Рисунок_problem5_comment', 'Доказательство-14_print_edit', 'Рисунок-9_print_edit', 'Предисловие_index_comment', 'При-доказательстве-фактов_homothetic_edit', 'Доказательство_problem5_comment', 'Подсказка-17_print_comment', 'Подсказка_fact7_comment', 'Факт-7_print_edit', 'Подсказка_fact1_comment', 'Подсказка_fact9_comment', 'Рисунок_print_comment', 'Предстоящие_print_comment', 'Факт-4_fact4_edit', 'Доказательство_fact3_edit', 'Необходимость-1_print_edit', 'Рисунок-1_print_comment', 'Факт-6_print_comment', 'Рисунок_fact10_comment', 'Задача-2_print_comment', 'Свойства_homothetic_comment', 'Симедиана_print_comment', 'Для-кого-эта-книга_foreword_comment', 'Рисунок_fact3_edit', 'Рисунок_fact4_comment', 'Рисунок-8_print_comment', 'Что-я-могу-тут-найти_foreword_edit', 'Доказательство-8_print_edit', 'Доказательство_problem1_comment', 'Что-я-могу-тут-найти_print_comment', 'Достаточность_fact3_edit', 'Свойства-2_print_comment', 'Примечание-2_print_edit', 'Задача-1_print_edit', 'Подсказка_fact2_edit', 'Рисунок_fact6_edit', 'Методы_foreword_comment', 'Доказательство-12_print_comment', 'Факт-4_print_edit', 'Что-я-могу-тут-найти_print_edit', 'Выход-в-пространство_stereometrising_comment', 'Как-читать-эту-книгу_print_edit', 'Подсказка-11_print_edit', 'Факт-5_fact5_comment', 'Доказательство-15_print_edit', 'Подсказка_problem1_comment', 'Симедиана_print_edit', 'Рисунок_fact11_edit', 'Рисунок_fact13_edit', 'Доказательства-свойств-2_print_comment', 'Рисунок_fact9_comment', 'Подсказка-1_print_comment', 'Упражнения_orthocenter_edit', 'Достаточность_fact3_comment', 'Подсказка_fact10_edit', 'Необходимость_fact12_comment', 'Точка-Микеля_print_comment', 'Подсказка-16_print_edit', 'Решение-задач-с-помощью-инверсии_inversion_edit', 'При-решении-задач_print_edit', 'Свойства-2_print_edit', 'Преобразования-плоскости_print_edit', 'Задачи_index_edit', 'Предисловие_foreword_edit', 'Подсказка-17_print_edit', 'Рисунок_problem4_edit', 'События_news_edit', 'События_print_comment', 'Доказательство_fact1_edit', 'Факты_index_comment', 'Необходимость-1_print_comment', 'Предисловие_print_comment', 'Преобразования-плоскости_transformations_comment', 'Теория_index_edit', 'Подсказка_fact9_edit', 'Для-кого-эта-книга_index_comment', 'Доказательства-свойств-1_print_edit', 'Радикальная-ось_radical_line_comment', 'Доказательство_problem3_edit', 'Подсказка_problem5_edit', 'Рисунок_problem4_comment', 'Факт-3_fact3_edit', 'Доказательство-6_print_edit', 'Поворот-вектора_rotate_vector_comment', 'Доказательство_fact12_comment', 'Факт-7_fact7_edit', 'Факт-2_print_comment', 'Задача-2_print_edit', 'Подсказка_fact2_comment', 'Доказательство_fact6_comment', 'Упражнения_orthocenter_comment', 'Использование-гомотетии_print_comment', 'Рисунок-6_print_edit', 'Доказательство_fact3_comment', 'Изогональное-сопряжение_isogonal_edit', 'Коники_print_comment', 'Доказательства-свойств_homothetic_comment', 'Выход-в-пространство_stereometrising_edit', 'Доказательство-13_print_edit', 'Известные-факты_inversion_comment', 'Доказательство-15_print_comment', 'Обновления_print_comment', 'Факт-2_print_edit', 'Доказательство-2_print_edit', 'Предстоящие_news_edit', 'document-not-found-404_404_comment', 'Задача-4_print_edit', 'Рисунок_fact7_comment', 'Доказательство-9_print_edit', 'Доказательство-12_print_edit', 'Свойства_orthocenter_comment', 'Теория_index_comment', 'Рисунок-12_print_edit', 'Задача-5_print_comment', 'Площадь_area_edit', 'Подсказка_problem2_edit', 'Подсказка_fact4_comment', 'При-доказательстве-фактов_homothetic_comment', 'Касание_touching_comment', 'Доказательство-13_print_comment', 'Обновления_news_edit', 'Доказательство_fact13_comment', 'Доказательство_fact7_comment', 'Коники_conics_comment', 'Факты-1_print_comment', 'Вокруг-ортоцентра_orthocenter_comment', 'Теория_foreword_edit', 'Доказательство_fact10_edit', 'Факт-9_fact9_comment', 'Факт-11_fact11_comment', 'Подсказка-7_print_comment', 'Подсказка_problem3_comment', 'Доказательство_fact2_edit', 'Факт-3_print_edit', 'Доказательство_fact8_comment', 'Подсказка_fact7_edit', 'Изогональное-сопряжение_print_edit', 'Инверсия_inversion_comment', 'Необходимость_fact3_edit', 'Подсказка_fact12_edit', 'Факт-11_fact11_edit', 'Подсказка-2_print_edit', 'Решение-задач-с-помощью-инверсии_print_edit', 'Касание_print_edit', 'Педальные-треугольники_pedal_comment', 'Как-читать-эту-книгу_print_comment', 'Подсказка-13_print_edit', 'Рисунок_fact4_edit', 'Рисунок-9_print_comment', 'Доказательство_fact11_edit', 'При-доказательстве-фактов_print_comment', 'Доказательства-свойств-1_print_comment', 'Рисунок-8_print_edit', 'Факт-7_fact7_comment', 'Симедиана_symmedian_comment', 'Факт-13_fact13_comment', 'Примечание-2_print_comment', 'Педальные-треугольники_pedal_edit', 'Факт-5_print_comment', 'Предисловие_index_edit', 'Доказательство_fact2_comment', 'Методы_methods_comment', 'Подсказка_fact5_edit', 'Рисунок-12_print_comment', 'Факт-10_fact10_comment', 'Доказательство_fact6_edit', 'Подсказка_problem1_edit', 'Инверсия_print_edit', 'Подсказка_problem2_comment', 'Рисунок-5_print_edit', 'Свойства_orthocenter_edit', 'Предисловие_print_edit', 'Факт-5_fact5_edit', 'Рисунок_fact8_edit', 'Рисунок-13_print_edit', 'Подсказка_fact3_comment', 'Подсказка_fact6_comment', 'Доказательство_problem1_edit', 'Что-я-могу-тут-найти_foreword_comment', 'Задача-4_print_comment', 'Факт-12_print_edit', 'Рисунок_fact8_comment', 'Доказательства-свойств-2_print_edit', 'Факт-1_fact1_comment', 'Подсказка-14_print_comment', 'Доказательство-3_print_edit', 'Как-читать-эту-книгу_foreword_comment', 'Факт-10_print_comment', 'Решение_problem4_comment', 'Примечание_fact4_comment', 'Подсказка_print_comment', 'Доказательство-9_print_comment', 'Новости_news_edit', 'Выход-в-пространство_print_comment', 'Факт-3_fact3_comment', 'Доказательство-11_print_comment', 'Задачи_foreword_comment', 'Новости_print_edit', 'Задача-3_problem3_edit', 'Рисунок-17_print_edit', 'Примечание_problem1_comment', 'Факт-12_fact12_comment', 'Задача-3_print_comment', 'Использование-гомотетии_homothetic_edit', 'Факты-1_print_edit', 'Факт-2_fact2_edit', 'При-решении-задач_homothetic_comment', 'Подсказка_problem3_edit', 'Известные-факты_inversion_edit', 'Доказательство_fact10_comment', 'Для-кого-эта-книга_foreword_edit', 'Рисунок-14_print_comment', 'Задача-3_print_edit', 'Доказательство-16_print_comment', 'Доказательство_fact11_comment', 'Для-кого-эта-книга_index_edit', 'Проективные-преобразования_projective_edit', 'Подсказка_problem4_comment', 'Доказательства-свойств_orthocenter_comment', 'Дополнение_index_comment', 'Рисунок-14_print_edit', 'Инверсия_inversion_edit', 'Преобразования-плоскости_print_comment', 'Подсказка-4_print_comment', 'Подсказка-3_print_edit', 'Задача-1_print_comment', 'Дополнение_foreword_comment', 'Доказательство_problem2_comment', 'Рисунок-10_print_edit', 'Подсказка_fact10_comment', 'Дополнение_foreword_edit', 'Упражнения_print_comment', 'Методы-1_print_edit', 'Факт-2_fact2_comment', 'Педальные-треугольники_print_edit', 'Подсказка-16_print_comment', 'Подсказка-15_print_edit', 'Факты_facts_comment', 'Факт-4_fact4_comment', 'Задача-4_problem4_comment', 'Инверсия_print_comment', 'Дополнение_print_comment', 'Рисунок_fact12_edit', 'Задача-3_problem3_comment', 'Рисунок-4_print_comment', 'Доказательство-6_print_comment', 'Подсказка_fact1_edit', 'Факт-6_fact6_edit', 'Факт-12_print_comment', 'Рисунок-1_print_edit', 'Решение-задач-с-помощью-инверсии_print_comment', 'Рисунок-7_print_edit', 'Задача-2_problem2_edit', 'Использование-гомотетии_print_edit', 'Факт-3_print_comment', 'Подсказка_print_edit', 'Необходимость_print_comment', 'Доказательство-8_print_comment', 'Факт-13_print_edit', 'Доказательство_fact8_edit', 'Факт-9_print_edit', 'Методы_print_comment', 'Достаточность-1_print_edit', 'События_print_edit', 'Факт-1_print_edit', 'Доказательство-16_print_edit', 'Доказательство-5_print_edit', 'Теория_theory_comment', 'Подсказка-5_print_comment', 'Точка-Микеля_miquel_point_edit', 'Подсказка-10_print_comment', 'Радикальная-ось_print_edit', 'Подсказка_problem4_edit', 'Доказательства-свойств_inversion_edit', 'Рисунок-4_print_edit', 'Достаточность_print_edit', 'Подсказка_fact12_comment', 'Подсказка_fact11_comment', 'Доказательство_fact13_edit', 'Новости_print_comment', 'Подсказка-7_print_edit', 'Рисунок-13_print_comment', 'Методы_foreword_edit', 'Радикальная-ось_radical_line_edit', 'Рисунок-2_print_edit', 'Доказательство_fact5_edit', 'Поворот-вектора_print_comment', 'Факт-8_fact8_edit', 'Новости_news_comment', 'Гомотетия_homothetic_comment', 'При-доказательстве-фактов_print_edit', 'Вокруг-ортоцентра_orthocenter_edit', 'Предстоящие_news_comment', 'Доказательство-14_print_comment', 'Доказательство-7_print_comment', 'Вокруг-ортоцентра_print_edit', 'Доказательство_print_comment', 'Подсказка-12_print_edit', 'Примечание-1_print_edit', 'Подсказка-4_print_edit', 'Факт-8_fact8_comment', 'Подсказка-3_print_comment', 'Замечательные-свойства-коник_print_edit', 'Доказательство_fact9_edit', 'Рисунок_problem5_edit', 'Доказательство_problem5_edit', 'Симедиана_symmedian_edit', 'Доказательство_fact5_comment', 'Методы-1_print_comment', 'Подсказка_fact13_comment', 'Касание_print_comment', 'Площадь_print_edit', 'Доказательство_fact4_comment', 'Вокруг-ортоцентра_print_comment', 'Доказательство_fact7_edit', 'Доказательство_fact4_edit', 'Факт-6_print_edit', 'Рисунок_fact6_comment', 'Гомотетия_homothetic_edit', 'Рисунок-5_print_comment', 'Факты_print_edit', 'Методы_methods_edit', 'Доказательство-5_print_comment', 'Доказательство_fact1_comment', 'Дополнение_print_edit', 'Свойства_print_edit', 'Подсказка-12_print_comment', 'Как-читать-эту-книгу_index_edit', 'Рисунок_fact1_comment', 'Задачи_print_comment', 'Факт-10_print_edit', 'Как-читать-эту-книгу_index_comment', 'Недавно-прошедшие_news_comment', 'Методы_index_edit', 'Рисунок_fact5_edit', 'Примечание_fact9_edit', 'Подсказка-15_print_comment', 'Недавно-прошедшие_print_comment', 'Подсказка-8_print_edit', 'Замечательные-свойства-коник_angle_prop_conics_comment', 'Факт-1_print_comment', 'Задачи_print_edit', 'Задачи_problems_edit', 'Задачи-1_print_comment', 'Факт-6_fact6_comment', 'Рисунок_fact11_comment', 'Факт-5_print_edit', 'Теория_print_comment', 'Гомотетия_print_comment', 'Подсказка_fact4_edit', 'Подсказка_fact3_edit', 'Доказательства-свойств_homothetic_edit', 'Для-кого-эта-книга_print_edit', 'Факт-9_print_comment', 'Подсказка_fact13_edit', 'document-not-found-404_404_edit', 'Рисунок_print_edit', 'Коники_conics_edit', 'Решение-задач-с-помощью-инверсии_inversion_comment', 'Свойства_print_comment', 'Доказательство-3_print_comment', 'Известные-факты_print_comment', 'Доказательство-10_print_comment', 'Факт-13_fact13_edit', 'Решение_problem4_edit', 'Доказательство-4_print_comment', 'Рисунок-3_print_edit', 'Задача-5_problem5_comment', 'Подсказка-6_print_comment', 'Подсказка_fact11_edit', 'Доказательство_print_edit', 'Доказательство-1_print_comment', 'Факт-9_fact9_edit', 'Необходимость_fact12_edit', 'Изогональное-сопряжение_print_comment', 'Для-кого-эта-книга_print_comment', 'Обновления_news_comment', 'Теория_foreword_comment', 'Задачи_problems_comment', 'Известные-факты_print_edit', 'Подсказка-8_print_comment', 'Рисунок_problem3_comment', 'Факты_print_comment', 'Педальные-треугольники_print_comment', 'Доказательство-10_print_edit', 'Рисунок-17_print_comment', 'Рисунок-11_print_comment', 'Факт-13_print_comment', 'Рисунок-15_print_comment', 'Предстоящие_print_edit', 'Достаточность-1_print_comment', 'Упражнения_print_edit', 'Площадь_print_comment', 'Свойства_inversion_comment', 'Примечание_problem1_edit', 'Рисунок_fact2_comment', 'Подсказка-1_print_edit', 'Факт-11_print_comment', 'Необходимость_print_edit', 'Теория-1_print_edit', 'Факты_facts_edit', 'Подсказка-10_print_edit', 'Задачи_foreword_edit', 'Достаточность_fact12_edit', 'Факт-11_print_edit', 'Подсказка-13_print_comment', 'Задача-2_problem2_comment', 'Подсказка-9_print_edit', 'Рисунок-16_print_edit', 'Свойства_inversion_edit', 'Рисунок_fact3_comment', 'Рисунок-16_print_comment', 'Факты_foreword_edit', 'Радикальная-ось_print_comment', 'Задача-5_problem5_edit', 'Примечание_print_edit', 'Недавно-прошедшие_print_edit', 'Факт-4_print_comment', 'Рисунок-3_print_comment', 'Рисунок_fact1_edit', 'Подсказка-14_print_edit'];

    
    showIcons();

	for (i in iconsIds) {
        let iconId = iconsIds[i];

	    setIconStyle(iconId);
    }

	bindEdit();
	bindComment();

}


main();
