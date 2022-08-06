describe("Servers test (with setup and tear-down)", function() {
  beforeAll(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update serverTable', function(){
    submitServerInfo();
    updateServerTable();
    let tableList = document.querySelectorAll('#serverTable tbody tr td')
    expect(tableList.length).toEqual(2);
    expect(tableList[0].innerText).toEqual('Alice');
    expect(tableList[1].innerText).toEqual('$0.00');
  })

  afterAll(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
