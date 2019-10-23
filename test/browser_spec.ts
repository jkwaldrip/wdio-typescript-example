describe("The browser", () => {
  it("enters a number", () => {
    browser.url("https://the-internet.herokuapp.com/inputs");

    let numberInput = $(".example>input");

    numberInput
        .waitForEnabled();

    numberInput
        .setValue("47");

    numberInput
      .getValue()
      .should.be
      .equal("47");
  });
});
