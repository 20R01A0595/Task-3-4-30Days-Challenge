function getObject(entries) {
  const uniqueMarks = new Map();
  for (const key in entries) {
    const entry = entries[key];
    const mark = entry.marks;
    if (uniqueMarks.has(mark)) {
      const existingEntry = uniqueMarks.get(mark);
    } else {
      uniqueMarks.set(mark, entry);
    }
  }
  const res = {};
  let i = 0;
  for (const [mark, entry] of uniqueMarks) {
    res[i++] = entry;
  }

  return res;
}

const input1 = {
  "0": { age: 18, name: "john", marks: "400"},
  "1": { age: 17, name: "julie", marks: "400"},
  "2": { age: 16, name: "Robin", marks: "300"},
  "3": { age: 16, name: "Bella", marks: "200"}
};

const output1 = getObject(input1);
console.log(output1);

const input2 = {
  0: { age: 18, name: "john", marks: "400" },
  1: { age: 17, name: "julie", marks: "400" },
  2: { age: 16, name: "Robin", marks: "200" },
  3: { age: 16, name: "Bella", marks: "300" },
  4: { age: 16, name: "john", marks: "250" },
  5: { age: 15, name: "julie", marks: "250" }
};

const output2 = getObject(input2);
console.log(output2);