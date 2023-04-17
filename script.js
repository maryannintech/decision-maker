/* 
function calculateSunSign(birthMonth, birthDate) {
  const zodiacSigns = [
    { name: "Aquarius", startDate: [1, 20], endDate: [2, 18] },
    { name: "Pisces", startDate: [2, 19], endDate: [3, 20] },
    { name: "Aries", startDate: [3, 21], endDate: [4, 19] },
    { name: "Taurus", startDate: [4, 20], endDate: [5, 20] },
    { name: "Gemini", startDate: [5, 21], endDate: [6, 20] },
    { name: "Cancer", startDate: [6, 21], endDate: [7, 22] },
    { name: "Leo", startDate: [7, 23], endDate: [8, 22] },
    { name: "Virgo", startDate: [8, 23], endDate: [9, 22] },
    { name: "Libra", startDate: [9, 23], endDate: [10, 22] },
    { name: "Scorpio", startDate: [10, 23], endDate: [11, 21] },
    { name: "Sagittarius", startDate: [11, 22], endDate: [12, 21] },
    { name: "Capricorn", startDate: [12, 22], endDate: [1, 19] }
  ];

  for (const sign of zodiacSigns) {
    const startMonth = sign.startDate[0];
    const startDay = sign.startDate[1];
    const endMonth = sign.endDate[0];
    const endDay = sign.endDate[1];

    if ((birthMonth == startMonth && birthDate >= startDay) ||
        (birthMonth == endMonth && birthDate <= endDay) ||
        (birthMonth > startMonth && birthMonth < endMonth)) {
      return sign.name;
    }
  }

  return "Invalid date";
}
*/
