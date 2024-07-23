export const RESULT_STATUS = {
  notDone: 'NOT DONE',
  fail: 'FAIL',
  pass: 'PASS',
  partialPass: 'PARTIAL PASS',
  partialFail: 'PARTIAL FAIL'
}

export const IS_AUTO = {
  manual: 'Manual',
  auto: 'Auto'
}

export const CONSTANT = [
  {
    id: 0,
    category: 'Audio',
    test: 'Internal Speaker Test',
    isAuto: IS_AUTO.manual,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 1,
    category: 'Display',
    test: 'Brightness Level Test',
    isAuto: IS_AUTO.manual,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 2,
    category: 'Display',
    test: 'Display Test',
    isAuto: IS_AUTO.manual,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 3,
    category: 'Display',
    test: 'External Display Test',
    isAuto: IS_AUTO.manual,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 4,
    category: 'General',
    test: 'Button & Timer Test',
    isAuto: IS_AUTO.manual,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 5,
    category: 'Memory',
    test: 'RAM Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 6,
    category: 'CPU',
    test: 'CPU Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 7,
    category: 'Display',
    test: 'Display Brightness Test',
    isAuto: IS_AUTO.manual,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 8,
    category: 'Keyboard',
    test: 'Keyboard Layout Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 9,
    category: 'Mouse',
    test: 'Mouse Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 10,
    category: 'Audio',
    test: 'Mic In-out Test',
    isAuto: IS_AUTO.manual,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 11,
    category: 'Communication',
    test: 'LAN Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 12,
    category: 'Communication',
    test: 'WLAN Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 13,
    category: 'Communication',
    test: 'Bluetooth Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 14,
    category: 'Modem',
    test: '3G/4G Modem Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 15,
    category: 'RF',
    test: 'RF Test',
    isAuto: IS_AUTO.auto,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  },
  {
    id: 16,
    category: 'Toolbox',
    test: 'Printing Device Test',
    isAuto: IS_AUTO.manual,
    retries: 0,
    allowedFailure: 0,
    passed: 0,
    failed: 0,
    result: RESULT_STATUS.notDone,
    checked: false
  }
]
