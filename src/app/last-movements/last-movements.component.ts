import { Component, OnInit } from '@angular/core';
import { MovementService } from '../services/movement.service';
import { Movement } from '../models/movement';

@Component({
  selector: 'app-last-movements',
  templateUrl: './last-movements.component.html',
  styleUrls: ['./last-movements.component.scss']
})
export class LastMovementsComponent implements OnInit {
  movements: Movement[];

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
    this.movementService.getMovements().subscribe(
      response => {
        this.movements = response.contents;
      },
      error => console.error('Error diring retrive last movements!!', error)
    );
  }

}
