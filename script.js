// 1
//შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს სახელების მასივს
//და დააბრუნებს მხოლოდ იმ სახელებს რომლის სიგრძეც მეტია 5ზე; ფუნქცია
//გამოიძახეთ და დალოგეთ კონსოლში
let firstNames = ["nika", "dato", "giorgi", "mamuka", "elene"];
let longNames = [];
function getLongNames(array) {
  for (let i = 0; i < array.length; i++) {
    let eachName = array[i];
    if (eachName.length > 5) {
      longNames.push(eachName);
    }
  }
}

getLongNames(firstNames);
console.log(longNames);

// 2
// შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს რიცხვებს
//და დააბრუნებს ამ რიცხვების ჯამს; ფუნქცია გამოიძახეთ და დალოგეთ კონსოლში

let numbers = [423, 2342, 345, 2345, 24562, 24562, 245, 23452, 254634];
let sum = [];
function getSum(numbersArray) {
  for (let i = 0; i < numbersArray.length; i++) {
    sum = numbersArray[i] += numbersArray[i];
  }
}
getSum(numbers);
console.log(sum);

// 3
// შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს
//და დბრუნებს სხვაობას; ფუნქცია გამოიძახეთ და დალოგეთ კონსოლში

function minusNumber(a, b) {
  return a - b;
}
let result = minusNumber(723, 534);
console.log(result);

// 4
// შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს ობიექტების
//მასივს და დააბრუნებს  ობიექტს რომლის ასაკიც ტოლია 25ის და
//დაამატებს თვისებას შემდეგი მნიშვნელობით(isRegistered: true);
//ფუნქცია გამოიძახეთ და დალოგეთ კონსოლში

let tsushima = {
  name: "jin sakai",
  age: 24,
};
let ronin = {
  name: "khotun khan",
  age: 25,
};
let ghost = {
  name: "lord shimura",
  age: 37,
};
let samurais = [tsushima, ronin, ghost];

function getRegisterStatus(array) {
  for (let i = 0; i < array.length; i++) {
    let eachSamurai = array[i];
    if (eachSamurai.age === 25) {
      eachSamurai.isRegistered = true;
      return eachSamurai;
    }
  }
}
let registeredSamurais = getRegisterStatus(samurais);
console.log(registeredSamurais);

// 5 & 6
//შექმენით <p>not click</p>ელემენტი და ღიალკზე
// დაჭერისას შეცვალეთ ამ ტექსტის
//მნიშნელობა "clicked" მნიშვნელობით;
//დასელექთებულ p ელემენტს დაამატეთ შემდეგი სტილები: ფონტის ზომა:40, ფერი :წითელი;

let text = document.getElementById("clickableText");
text.addEventListener("click", () => {
  text.textContent = "clicked";
  text.style.fontSize = "40px";
  text.style.color = "red";
});

// 7
// შექმენით ორი ველი სადაც ჩაწერთ სახელს და
// გვარს და ღილაკზე დაჭერისას  გამოიტანეთ ამ ორი
//ველის მნიშნელობაs დინამიურად შექმნილ div
//ტეგში(document.createElement('div'))

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let save = document.getElementById("save");

save.addEventListener("click", () => {
  let firstNameValue = firstName.value;
  let lastNameValue = lastName.value;
  let myDiv = document.createElement("div");
  myDiv.textContent = `my name is ${firstNameValue} and last name ${lastNameValue}.`;
  document.body.appendChild(myDiv);
});

// 8
// შექმენით ობიექტი რომელსაც ექნება ორი მნიშვნელობა
//და გამოიტანეთ ეს მნიშნელობები კლიენტის მხარეს, ერთისთვის
// გამოიყენეთ h1 ტეგი ხოლო მეორესთვის  span

let student = {
  name: "giorgi",
  mark: 97,
};
let studentName = student.name;
let studentMark = student.mark;
let heading = document.createElement("h1");
let spanElement = document.createElement("span");
heading.textContent = studentName;
spanElement.textContent = studentMark;
document.body.appendChild(heading);
document.body.appendChild(spanElement);
