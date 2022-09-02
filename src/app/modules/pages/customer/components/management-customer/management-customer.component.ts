import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-management-customer',
  templateUrl: './management-customer.component.html',
  styleUrls: ['./management-customer.component.scss'],
})
export class ManagementCustomerComponent implements OnInit {
  checkDigit!: number;
  total: number = 0;
  len!: number;

  constructor() {}

  ngOnInit(): void {}

  createCheckDigit(idNumber: string): number {
    const splitNumber = idNumber.split('');
    this.len = splitNumber.length;

    for (let i = 0; i < this.len; i++) {
      this.total = this.total + Number(splitNumber[i])
    }
    this.checkDigit = this.total;
    if (this.total > 9) {
      this.total = 0;
      this.createCheckDigit(String(this.checkDigit));
    }
    return this.checkDigit;
  }
}
