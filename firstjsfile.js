let person = [
    {
        firstName: 'Ankit',
        lastName: 'Srivastava',
        Office_Address: 'Muzaffarpur'
    },
    {
        firstName: 'Abhishek',
        lastName: 'Srivastava',
        Office_Address: 'Noida'
    },
    {
        firstName: 'Abhighyan',
        lastName: 'Srivastava',
        Office_Address: 'New Delhi'
    }
]

for(let i = 0;i< person.length;i++) {
    val = person[i];
    console.log('Person-' + (i+1));
    for(j in val) {
        console.log(j +"-" + val[j]);
    }
    console.log();
}
