import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/models/movement';
import { MovementService } from 'src/app/services/movement.service';

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
      error => console.error('Error during retrive last movements!!', error)
    );
  }

}
