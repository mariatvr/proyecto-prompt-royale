import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Perro {
  id: number;
  nombre: string;
  edad: number;
  raza: string;
  adoptado: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'protectora-front';

  nuevoPerro = {
    nombre: '',
    edad: 0,
    raza: ''
  };

  listaPerros: Perro[] = [
    { id: 1, nombre: 'Rocky', edad: 2, raza: 'Pastor Alemán', adoptado: false },
    { id: 2, nombre: 'Luna', edad: 4, raza: 'Golden Retriever', adoptado: false },
    { id: 3, nombre: 'Toby', edad: 1, raza: 'Chihuahua', adoptado: true }
  ];

  agregarPerro(): void {
    const nombre = this.nuevoPerro.nombre.trim();
    const raza = this.nuevoPerro.raza.trim();

    if (!nombre || !raza || this.nuevoPerro.edad < 0) {
      return;
    }

    const siguienteId = Math.max(...this.listaPerros.map((perro) => perro.id), 0) + 1;

    this.listaPerros = [
      {
        id: siguienteId,
        nombre,
        edad: this.nuevoPerro.edad,
        raza,
        adoptado: false
      },
      ...this.listaPerros
    ];

    this.nuevoPerro = {
      nombre: '',
      edad: 0,
      raza: ''
    };
  }

  adoptar(perro: Perro): void {
    if (perro.adoptado) {
      return;
    }

    perro.adoptado = true;
  }
}
