import Person from './person';

class Team {
  constructor() {
    this.member = new Set();
  }

  [Symbol.iterator]() {
    const arrayTeam = Array.from(this.member);
    let index = -1;
    return {
      next() {
        if (index > arrayTeam.length - 2) {
          return {
            done: true,
          };
        }
        index += 1;
        return {
          done: false,
          value: arrayTeam[index],
        };
      },
    };
  }

  add(target) {
    if (this.member.has(target)) {
      throw new Error('Такой персонаж уже есть в команде');
    }
    this.member.add(target);
  }

  addAll(...сharacter) {
    сharacter.forEach((item) => this.member.add(item));
  }

  toArray() {
    this.member = Array.from(this.member);
  }
}

const heroBowman = new Person('Лучник', 'Bowman', 50, 1, 25, 25);
const heroSwordsman = new Person('Мечник', 'Swordsman', 100, 1, 40, 10);
const heroZombie = new Person('Мечник', 'Swordsman', 80, 1, 40, 10);

const heroTeam = new Team();

heroTeam.addAll(heroBowman, heroSwordsman, heroZombie);

for (const hero of heroTeam) {
  console.log(hero);
}