// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

// Example Input

// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output

// Michael is going to buy lunch today!

const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whoBuying(people) {
  const randomNumber = Math.floor(Math.random() * people.length);
  console.log(people[randomNumber] + " is going to buy lunch today");
}

whoBuying(names);
