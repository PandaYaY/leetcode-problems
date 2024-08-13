let str = `insert into public.odds_types (id, name, "order", bet_type_id, rus_name)
values (1513, 'home', 1, 770, '%{O1}'),
       (1514, 'draw', 2, 770, 'ничья'),
       (1515, 'away', 3, 770, '%{O2}'),`;

let strStart = str.match(/values \((\d*), '/m)![1];
let intStart = Number.parseInt(strStart);
let newStart = 1556;
let diff = newStart - intStart;

let lines = str.split("\n");
const regexp: RegExp = /\((\d*),/;
for (let line of lines) {
  if (regexp.test(line)) {
    let curId = line.match(regexp);
    let intCurId = Number.parseInt(curId![1]);
    console.log(line.replace(regexp, `(${intCurId + diff},`));
  }
}
