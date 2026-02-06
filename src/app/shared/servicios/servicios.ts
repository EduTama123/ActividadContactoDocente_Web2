import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  subtitulo: string = "Cuidamos a los que más quieres con servicios de calidad"
  //variable servicioSeleccionado que contenga ninguno
  servicioSeleccionado: string = "ninguno"

  servicios = [
    {
      id: 1,
      nombre: "Consulta general",
      descripcion: "Evaluacion completa de tu mascota",
      imagen: "https://purina.com.ec/sites/default/files/2022-10/purina-consulta-veterinaria-para-mascotas-lo-que-debes-saber.jpg",
      activo: true
    },
    {
      id: 2,
      nombre: "Cirugía",
      descripcion: "El cuidado de tu mascota con el mejor cirujano",
      imagen: "https://veteriastur.com/wp-content/uploads/2019/06/iStock-868086578.jpg",
      activo: true
    },
    {
      id: 3,
      nombre: "Estética",
      descripcion: "El cuidado de la imagen de tu mascota es primordial",
      imagen: "https://belovet.com/wp-content/uploads/2024/05/Cirugia-veterinaria.webp",
      activo: false
    },
  ];
  //Varoabñe serviciosFiltrados para la busqueda
  serviciosFiltrados = this.servicios;

  //Función para mostrar el mensaje Has mostrado interes en: (parametro)
  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
  }

  //Función para buscar servicios
  busqueda(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    //valor= (input)
    this.subtitulo = 'Resultados para: ${valor}';
    this.serviciosFiltrados = this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valor.toLowerCase())
    );
  }
}
