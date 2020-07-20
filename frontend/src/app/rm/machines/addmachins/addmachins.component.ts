import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../../../shared/machin/machines.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addmachins',
  templateUrl: './addmachins.component.html',
  styleUrls: ['./addmachins.component.css'],
  providers: [MachinesService],
})
export class AddmachinsComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  title: 'fileUpload';
  images;
  constructor(public machinesService: MachinesService) {}

  ngOnInit(): void {}
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  onSubmit(form: NgForm) {
    const formData = new FormData();
    formData.append('file', this.images);
    formData.append('name', form.value.name);
    formData.append('reference', form.value.reference);
    formData.append('family', form.value.family);
    formData.append('brand', form.value.brand);
    formData.append('supplierName', form.value.supplierName);
    formData.append('supplierContact', form.value.supplierContact);
    formData.append('serialNumber', form.value.serialNumber);
    formData.append('dateOfPurchase', form.value.dateOfPurchase);
    formData.append('inventory', form.value.inventory);
    formData.append('ISBN', form.value.isbn);
    formData.append('department', form.value.department);
    formData.append('comment', form.value.comment);

    this.machinesService.postData(formData).subscribe(
      (res) => {
        this.showSuccessMessage = true;
        setTimeout(() => (this.showSuccessMessage = false), 3000);
        this.resetForm(form);
      },
      (err) => {
        this.serverErrorMessages =
          'something went wrong. Please check your entry data';
      }
    );
  }
  resetForm(form: NgForm) {
    this.machinesService.selectedMachine = {
      name: '',
      reference: '',
      family: '',
      state: '',
      brand: '',
      supplierName: '',
      supplierContact: '',
      serialNumber: '',
      dateOfPurchase: '',
      inventory: '',
      ISBN: '',
      department: '',
      image: '',
      comment: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
