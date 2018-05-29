const data = [
    { id: 1, name: "Test 1", created: new Date('2018/5/01') },
    { id: 2, name: "Test 2", created: new Date('2018/5/02') },
    { id: 3, name: "Test 3", created: new Date('2018/5/03') },
    { id: 4, name: "Test 4", created: new Date('2018/5/04') },
    { id: 5, name: "Test 5", created: new Date('2018/5/05') },
    { id: 6, name: "Test 6", created: new Date('2018/5/06') },
    { id: 7, name: "Test 7", created: new Date('2018/5/07') },
    { id: 8, name: "Test 8", created: new Date('2018/5/08') },
    { id: 9, name: "Test 9", created: new Date('2018/5/09') },
    { id: 10, name: "Test 10", created: new Date('2018/5/10') },
    { id: 11, name: "Test 11", created: new Date('2018/5/11') },
    { id: 12, name: "Test 12", created: new Date('2018/5/12') },
    { id: 13, name: "Test 13", created: new Date('2018/5/13') },
    { id: 14, name: "Test 14", created: new Date('2018/5/14') },
    { id: 15, name: "Test 15", created: new Date('2018/5/15') },
  ];

  
export function getData() {
    return new Promise(resolve => {
        window.setTimeout(() => resolve(data), 1500);
    })
}