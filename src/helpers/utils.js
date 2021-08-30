const CATEGORY = [
  'WC',
  'CL',
  'BL1',
  'DED',
  'BSA',
  'PD',
  'FL1',
  ' ELC',
  'PPL',
  'EC',
  'SA',
  'PL',
  'CLI',
];
// eslint-disable-next-line import/prefer-default-export
export const filtered = (data) => {
  const filteredCompetition = [];
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < CATEGORY.length; j += 1) {
      if (data[i].code === CATEGORY[j]) {
        filteredCompetition.push(data[i]);
        // return true;
      }
    }
  }
  return filteredCompetition;
  // return false;
};
