import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css', 'arrow.styles.scss'],
})
export class WorkExperienceComponent implements OnInit {
  constructor() {}

  accordionItems: NodeListOf<HTMLLIElement> = document.querySelectorAll('li');
  currentIndex = 0;

  ngOnInit(): void {
    // Obtener los elementos del acordeón
    const accordionItems = document.querySelectorAll('.acordiones ul li');

    // Obtener las flechas de navegación
    const prevArrow = document.getElementById('prev');
    const nextArrow = document.getElementById('next');

    let currentIndex = 0; // Índice del elemento actualmente activo

    // Función para mostrar u ocultar el contenido del acordeón
    function toggleAccordion(index: number) {
      accordionItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active'); // Mostrar el elemento actual
        } else {
          item.classList.remove('active'); // Ocultar los otros elementos
        }
      });
    }

    // Event listener para la flecha de navegación previa
    prevArrow?.addEventListener('click', (event) => {
      event.stopPropagation(); // Evitar que el clic se propague al acordeón
      currentIndex =
        (currentIndex - 1 + accordionItems.length) % accordionItems.length;
      toggleAccordion(currentIndex);
    });

    // Event listener para la flecha de navegación siguiente
    nextArrow?.addEventListener('click', (event) => {
      event.stopPropagation(); // Evitar que el clic se propague al acordeón
      currentIndex = (currentIndex + 1) % accordionItems.length;
      toggleAccordion(currentIndex);
    });

    // Event listeners para cada elemento del acordeón
    accordionItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentIndex = index; // Actualizar el índice al hacer clic en un elemento
        toggleAccordion(currentIndex);
      });
    });
  }
}
