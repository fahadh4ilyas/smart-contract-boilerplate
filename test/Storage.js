const StorageContract = artifacts.require('Storage');

contract('Test Storage', async accounts => {
  let deployedStorage;
  it('should be deployed', async () => {
    deployedStorage = await StorageContract.deployed();
  });

  it('should be easy to change value', async () => {
    await deployedStorage.store(10, { from: accounts[0] });
    assert.equal(await deployedStorage.retrieve(), 10);
  });
});
