import Bowman from './Bowman';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Daemon from './Daemon';

export default class Team {
  constructor() {
    this.team = [
      new Bowman('Иван'),
      new Magician('Матильда'),
      new Swordsman('Бернард'),
      new Daemon('Горыныч'),
    ];
  }

  *[Symbol.iterator]() {
    const { team } = this;
    for (let value = 0; value < team.length; value++) {
      yield team[value];
    }
  }
}
