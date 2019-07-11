import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id;
  items = [];

  constructor(
    private orderService : OrderService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.orderService.getProduct(this.id).subscribe((p) => {this.items = p});
  }

}
