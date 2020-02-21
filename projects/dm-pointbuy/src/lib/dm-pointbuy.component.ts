import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lib-dm-pointbuy',
  templateUrl:'./dm-pointbuy.html',
  styles: []
})
export class DmPointbuyComponent implements OnInit {

  // Config
  statCosts: number[] = [
    -20, -15, -11, -9, -7, -5, -4, -3, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 17, 23, 25
  ];

  stats: string[] = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

  minStat = 5;
  maxStat = 18;
  maxPoints = 19;
  maxPointsGainable = 10;

  // State
  formControls = new Map<string, FormControl>();

  constructor() {
    this.stats.forEach(
      (val) => {
        let fc = new FormControl(
          10,
          {
            validators: [
              Validators.min(this.minStat),
              Validators.max(this.maxStat)
            ]
          }
        );
        this.formControls.set(val, fc);
      }
    );
  }

  getStatModifier(stat: string) {
    return Math.floor(this.formControls.get(stat).value / 2) - 5
  }

  getTotalPoints() {
    let total = 0;
    this.formControls.forEach(fc => total += this.statCosts[fc.value]);
    return total;
  }

  getGainedPoints() {
    let total = 0;
    this.formControls.forEach(fc => this.statCosts[fc.value] < 0 && (total += this.statCosts[fc.value]));
    return -total;
  }

  ngOnInit() {
  }

}
