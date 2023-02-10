// Tests
function runTests() {
  let resultArray = getResultArray(10);
  let expectedArray = [0, 'Beep!', 'Boop!', 'Won\'t you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!'];
  let isTestPassing = JSON.stringify(resultArray) === JSON.stringify(expectedArray);
  console.log('Test 1', isTestPassing ? 'PASS' : 'FAIL');

  resultArray = getResultArray(20);
  expectedArray = [0, 'Beep!', 'Boop!', 'Won\'t you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 11, 'Boop!', 'Won\'t you be my neighbor?', 14, 15, 16, 17, 18, 19, 'Beep!'];
  isTestPassing = JSON.stringify(resultArray) === JSON.stringify(expectedArray);
  console.log('Test 2', isTestPassing ? 'PASS' : 'FAIL');

  resultArray = getResultArray(0);
  expectedArray = [0];
  isTestPassing = JSON.stringify(resultArray) === JSON.stringify(expectedArray);
  console.log('Test 3', isTestPassing ? 'PASS' : 'FAIL');
}

runTests();