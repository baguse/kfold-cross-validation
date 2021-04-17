const students = {
  baguse: {
    alamat: "pajangan"
  },
  eksan: {
    alamat: "mberjo"
  },
  pepen: {
    alamat: "slegi"
  }
};

const { eksan: student, ...otherStudent } = students;

console.log({ student, otherStudent });
