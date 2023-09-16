// Define an array of developers
let developers = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
    // Add more developers here
  ];
  
  function PrintDeveloper() {
    developers.forEach(function (developer) {
      console.log(developer);
    });
  }
  
  function addData() {
    const name = prompt('Enter name:');
    const age = prompt('Enter age:');
    const profession = prompt('Enter profession:');
    
    const newDeveloper = { name, age, profession };
    developers.push(newDeveloper);
  }
  
  function removeAdmin() {
    developers = developers.filter(function (developer) {
      return developer.profession !== 'admin';
    });
  }
  
  function concatenateArray() {
    const dummyArray = [
      { name: 'Dummy 1', age: 30, profession: 'developer' },
      { name: 'Dummy 2', age: 28, profession: 'developer' }
    ];
  
    const combinedArray = developers.concat(dummyArray);
    console.log(combinedArray);
  }
  
  function averageAge() {
    const totalAge = developers.reduce(function (sum, developer) {
      return sum + parseInt(developer.age);
    }, 0);
  
    const average = totalAge / developers.length;
    console.log('Average age:', average);
  }
  
  function checkAgeAbove25() {
    const isAbove25 = developers.some(function (developer) {
      return parseInt(developer.age) <25;
    });
  
    if (isAbove25) {
      console.log('There is at least one person above 25.');
    } else {
      console.log('There is no one above 25.');
    }
  }
  
  function uniqueProfessions() {
    const professions = developers.map(function (developer) {
      return developer.profession;
    });
  
    const uniqueProfessionsSet = new Set(professions);
    const uniqueProfessionsArray = Array.from(uniqueProfessionsSet);
    
    console.log('Unique professions:', uniqueProfessionsArray);
  }
  
  function sortByAge() {
    developers.sort(function (a, b) {
      return parseInt(a.age) - parseInt(b.age);
    });
  }
  
  function updateJohnsProfession() {
    const johnIndex = developers.findIndex(function (developer) {
      return developer.name === 'John';
    });
  
    if (johnIndex !== -1) {
      developers[johnIndex].profession = 'manager';
    }
  }
  
  function getTotalProfessions() {
    const totalDevelopers = developers.filter(function (developer) {
      return developer.profession === 'developer';
    }).length;
  
    const totalAdmins = developers.filter(function (developer) {
      return developer.profession === 'admin';
    }).length;
  
    console.log('Total Developers:', totalDevelopers);
    console.log('Total Admins:', totalAdmins);
  }
  