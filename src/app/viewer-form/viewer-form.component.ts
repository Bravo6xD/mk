import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonSelectOption, IonInput, IonSelect, } from "@ionic/angular/standalone";

@Component({
  selector: 'app-viewer-form',
  templateUrl: './viewer-form.component.html',
  styleUrls: ['./viewer-form.component.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, CommonModule, ReactiveFormsModule, IonSelectOption, IonInput, IonSelect,],
})
export class ViewerFormComponent {
  form: FormGroup;

  @Output() viewerData = new EventEmitter<{ type: string; visits: number; price: number }>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: ['regular', Validators.required],
      visits: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.viewerData.emit(this.form.value);
    }
  }
}
