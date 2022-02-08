// require('jest-fetch-mock').enableMocks()
import Users from '/src/models/Users'
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

const usersModel = new Users()
// beforeEach(() => { // if you have an existing `beforeEach` just add the following line to it
//     fetchMock.usersModel._onReceive()
//   })


beforeEach(() => {
});

  
test('join Orin and ami to be Orinami', () => {
    // expect.assertions(1);
    // function fetchPicture(data) {
    //     expect(data).toBeTruthy();
    //     }
    // const usersModel = new Users()
    console.log("usersModel", usersModel.users)
    expect(usersModel.users.length).toBe(0);

    // asyncCode(fetchPicture, fetchName, githubName);
});

// async/await can also be used with `.resolves`.
it('works with async/await and resolves', async () => {
    // expect.assertions(1);
    // await expect(usersModel._onReceive()).resolves.toEqual('Paul');
    await usersModel._onReceive()
    console.log("done!")
    expect(usersModel.users.length).toBe(500)
  });

// test('join Orin and ami to be Orinami', () => {
//     expect.assertions(1);
//     // function fetchPicture(data) {
//     //     expect(data).toBeTruthy();
//     //     }
//     // const usersModel = new Users()
//     console.log("usersModel", usersModel.users)
//     expect(usersModel.users.length).toBe(0);

//     asyncCode(usersModel._onReceive);
// });