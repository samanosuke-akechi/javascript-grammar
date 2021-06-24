// 条件分岐
const judge = (animal) => {
  if (animal == "dog") {
    console.log(`${animal}です`);
  } else if (animal == "cat") {
    console.log(`${animal}です`);
  } else {
    console.log("dogとcatのどちらでもありません");
  }
};

let animal1 = "dog"
judge(animal1);

let animal2 = "cat"
judge(animal2);

let animal3 = "bird"
judge(animal3);