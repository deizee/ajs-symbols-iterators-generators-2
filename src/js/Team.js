import Bowman from './Bowman';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Daemon from './Daemon';

export default class Team {
  constructor() {
    this.bowman = new Bowman('Иван');
    this.magician = new Magician('Матильда');
    this.swordsman = new Swordsman('Бернард');
    this.daemon = new Daemon('Горыныч');
  }
}
