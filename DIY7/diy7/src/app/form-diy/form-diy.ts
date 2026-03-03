import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para diretivas básicas
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-diy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importe o módulo de formulários aqui!
  templateUrl: './form-diy.html',
  styleUrls: ['./form-diy.css']
})
export class FormDiyComponent implements OnInit {
  meuForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.meuForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', [Validators.required, Validators.minLength(5)]],
      note: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.meuForm.valid) {
      console.warn('Form Value:', this.meuForm.value);
    }
  }

  onReset() {
    this.meuForm.reset();
  }
}